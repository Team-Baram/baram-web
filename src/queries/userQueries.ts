import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/queries'
import { ExternalAPI } from '@/utils'
import { useRouter } from 'next/navigation'

export const useValidateNicknameQuery = (nickname: string, isValidNickname: boolean) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [QUERY_KEYS.VALIDATE_NICKNAME, nickname],
    queryFn: async () => {
      const response = await ExternalAPI.get(`/api/user/check-nickname?nickname=${nickname}`)
      return response.data
    },
    enabled: !!nickname && isValidNickname,
  })

  return { isLoading, isError, error, data }
}

export const useRedirectOnBoardingMutation = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: async () => {
      const response = await ExternalAPI.post(`/api/user/onboarding`)
      return response.data
    },
    onSuccess: () => {
      router.push('/onboarding/preference')
    },
  })
}

export const useFetchProfileQuery = () => {
  const { isLoading, isError, isSuccess, error, data } = useQuery({
    queryKey: [QUERY_KEYS.FETCH_PROFILE],
    queryFn: async () => {
      const response = await ExternalAPI.get('/api/user/profile')
      return response.data
    },
  })

  return { isLoading, isError, isSuccess, error, data }
}

export const useFetchAccountQuery = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [QUERY_KEYS.FETCH_ACCOUNT],
    queryFn: async () => {
      const response = await ExternalAPI.get('/api/user/account')
      return response.data
    },
  })

  return { isLoading, isError, error, data }
}

export const useUpdateNicknameMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (dto: { nickname: string }) => {
      const response = await ExternalAPI.patch('/api/user/nickname', dto)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.VALIDATE_NICKNAME])
    },
  })
}

export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (dto: { avatarUrl?: string; isReportPublic?: boolean }) => {
      const response = await ExternalAPI.patch('/api/user/profile', dto)
      return response.data
    },
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.FETCH_PROFILE], (prev) => ({
        profile: {
          ...prev.profile,
          ...data,
        },
      }))
    },
  })
}

export const useUpdateAccountMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (dto: { nickname?: string; mobile?: boolean; mobileE164?: string }) => {
      const response = await ExternalAPI.patch('/api/user/account', dto)
      return response.data
    },
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.FETCH_ACCOUNT], (prev) => ({
        account: {
          ...prev.account,
          ...data,
        },
      }))
    },
  })
}

export const useDeleteUserMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await ExternalAPI.delete('/api/user')
      return response.data
    },
    onSuccess: (data) => {
      window.location.href = data.redirectURL
    },
  })
}
