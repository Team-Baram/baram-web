import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/queries'
import { ExternalAPI } from '@/utils'

export const useCreatePreferenceOnBoardingMutation = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: async (dto: {
      activityType: string
      distance: number
      pace: number
      activityDaysPerWeek: number
    }) => {
      const response = await ExternalAPI.post('/api/preference/onboarding', dto)
      return response.data
    },
    onSuccess: (data) => {
      router.push(data.redirectURL)
    },
  })
}

//export const useCreatePreferenceMutation = () => {
//  return useMutation({
//    mutationFn: async (dto: {
//      activityType: string
//      distance: number
//      pace: number
//      activityDaysPerWeek: number
//    }) => {
//      const response = await ExternalAPI.post('/api/preference', dto)
//      return response.data
//    },
//    onSuccess: (data) => {
//    },
//  })
//}

export const useUpdatePreferenceMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (dto: {
      id: number
      activityType?: string
      distance?: number
      pace?: number
      activityDaysPerWeek?: number
    }) => {
      const response = await ExternalAPI.patch('/api/preference', dto)
      return response.data
    },
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.FETCH_PROFILE], (prev) => ({
        profile: {
          ...prev.profile,
          preferences: [
            {
              ...prev.profile.preferences[0],
              ...data,
            },
          ],
        },
      }))
    },
  })
}
