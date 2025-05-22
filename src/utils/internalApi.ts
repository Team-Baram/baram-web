import axios from 'axios'

const internalInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BARAM_INTERNAL_API_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const InternalAPI = {
  get: (url: string, params = {}, config = {}) => internalInstance.get(url, { params, ...config }),

  post: (url: string, data = {}, config = {}) => internalInstance.post(url, data, config),

  put: (url: string, data = {}, config = {}) => internalInstance.put(url, data, config),

  patch: (url: string, data = {}, config = {}) => internalInstance.patch(url, data, config),

  delete: (url: string, params = {}, config = {}) =>
    internalInstance.delete(url, { params, ...config }),
}

export default InternalAPI
