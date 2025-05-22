import { useQuery, useMutation } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/queries'
import { ExternalAPI } from '@/utils'

export const useNaverLoginQuery = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [QUERY_KEYS.FETCH_NAVER_LOGIN],
    queryFn: async () => {
      const response = await ExternalAPI.get('/api/auth/naver')
      return response.data
    },
  })

  return { isLoading, isError, error, data }
}

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await ExternalAPI.post('/api/auth/logout')
      return response.data
    },
    onSuccess: () => {
      window.location.href = '/'
    },
  })
}
