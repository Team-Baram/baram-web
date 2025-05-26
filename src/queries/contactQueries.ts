import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { QUERY_KEYS } from '@/queries'
import { ExternalAPI } from '@/utils'
import type { ContactStatus } from '@/types'

export const useFetchContactSummaryQuery = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [QUERY_KEYS.FETCH_CONTACT_SUMMARY],
    queryFn: async () => {
      const response = await ExternalAPI.get('/api/contact/summary')
      return response.data
    },
    select: (data) => ({
      ...data,
      contactSummary: {
        ...data.contactSummary,
        total: data.contactSummary?.total ?? 0,
        pending: data.contactSummary?.pending ?? 0,
        answered: data.contactSummary?.answered ?? 0,
      },
    }),
  })

  return { isLoading, isError, error, data }
}

export const useFetchContactsQuery = (page: number, status?: ContactStatus) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [QUERY_KEYS.FETCH_CONTACTS, page, status],
    queryFn: async () => {
      const response = await ExternalAPI.get('/api/contact', { page, limit: 10, status })
      return response.data
    },
    select: (data) => ({
      ...data,
      paginatedContact: {
        ...data.paginatedContact,
        limit: data.paginatedContact?.limit ?? 10,
        page: data.paginatedContact?.page ?? 1,
        total: data.paginatedContact?.total ?? 0,
        pending: data.paginatedContact?.pending ?? 0,
        answered: data.paginatedContact?.answered ?? 0,
        data: data.paginatedContact?.data ?? [],
      },
    }),
  })

  return { isLoading, isError, error, data }
}

export const useFetchContactQuery = (contactId: string) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [QUERY_KEYS.FETCH_CONTACT, contactId],
    queryFn: async () => {
      const response = await ExternalAPI.get(`/api/contact/${contactId}`)
      return response.data
    },
    select: (data) => ({
      ...data,
      contact: {
        ...data.contact,
        id: data.contact?.id ?? '',
        title: data.contact?.title ?? '',
        content: data.contact?.content ?? '',
        status: data.contact?.status ?? '',
        answer: data.contact?.answer ?? '',
        createdAt: data.contact?.createdAt ?? '',
        answeredAt: data.contact?.answeredAt ?? '',
      },
    }),
  })

  return { isLoading, isError, error, data }
}

export const useCreateContactMutation = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: async (dto: { title: string; content: string }) => {
      const response = await ExternalAPI.post('/api/contact', dto)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.FETCH_CONTACTS])
      router.push('/my/contact')
    },
  })
}
