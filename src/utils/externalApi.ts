import axios from 'axios'
import { getAccessToken, removeAccessToken } from '@/utils/clientUtils'

const externalInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BARAM_EXTERNAL_API_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

externalInstance.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

externalInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      error.response?.data?.errorCode === 'TOKEN_EXPIRED' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      try {
        await externalInstance.get('/api/auth/refresh')
        return externalInstance(originalRequest)
      } catch (err) {
        removeAccessToken()
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  },
)

const ExternalAPI = {
  get: (url: string, params = {}, config = {}) => externalInstance.get(url, { params, ...config }),

  post: (url: string, data = {}, config = {}) => externalInstance.post(url, data, config),

  put: (url: string, data = {}, config = {}) => externalInstance.put(url, data, config),

  patch: (url: string, data = {}, config = {}) => externalInstance.patch(url, data, config),

  delete: (url: string, params = {}, config = {}) =>
    externalInstance.delete(url, { params, ...config }),
}

export default ExternalAPI
