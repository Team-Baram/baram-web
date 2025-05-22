import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { QUERY_KEYS } from '@/queries'
import { ExternalAPI } from '@/utils'

export const useFetchContactsQuery = () => {
	const { isLoading, isError, error, data } = useQuery({
		queryKey: [QUERY_KEYS.FETCH_CONTACT],
		queryFn: async () => {
			const response = await ExternalAPI.get('/api/contact')
			return response.data
		}	
	})

	return { isLoading, isError, error, data }
}

export const useCreateContactMutation = () => {
	const queryClient = useQueryClient()
	const router = useRouter() 
	
	return useMutation({
		mutationFn: async (dto: { title: string, content: string }) => {
			const response = await ExternalAPI.post('/api/contact', dto)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.FETCH_CONTACT])
			router.push('/my/contact')
		}
	})
}
