'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useIsRestoring } from '@tanstack/react-query'
import { Box, Stack, Button, Typography } from '@mui/material'
import { useFetchContactSummaryQuery, useFetchContactsQuery } from '@/queries'
import { Spinner } from '@/components'
import ContactTable from './ContactTable'
import ContactSummary from './ContactSummary'
import type { ContactStatus } from '@/types'

export default function ContactContainer() {
  const router = useRouter()
  const isRestoring = useIsRestoring()
  const [page, setPage] = useState<number>(1)
  const [status, setStatus] = useState<undefined | ContactStatus>()
  const {
    isLoading: isSummaryLoading,
    isError: isSummaryError,
    error: summaryError,
    data: summaryData,
  } = useFetchContactSummaryQuery()
  const {
    isLoading: isContactsLoading,
    isError: isContactsError,
    error: contactsError,
    data: contactsData,
  } = useFetchContactsQuery(page, status)

  if (isRestoring || isSummaryLoading) {
    return <Spinner />
  }

  if (isSummaryError || isContactsError) {
    throw summaryError ?? contactError
  }

  const handlePageChange = (e: React.ChangeEvent, page: number) => {
    setPage(page)
  }

  const handleStatusChange = (status?: 'pending' | 'answered') => {
    setPage(1)
    setStatus(status)
  }

  return (
    <Box sx={{ width: '100%', height :'100%', display: 'flex', flexDirection: 'column' }}>
      <ContactSummary
        contactSummary={summaryData.contactSummary}
        status={status}
        onStatusChange={handleStatusChange}
      />
      <Stack direction='row-reverse'>
        <Button
          variant='contained'
          onClick={() => router.push('/my/contact/inquiry')}
          sx={{ mb: 4, mr: 1 }}
        >
          문의등록
        </Button>
      </Stack>
      {isContactsLoading ? (
        <Spinner />
      ) : contactsData.paginatedContact.total > 0 ? (
        <ContactTable
          page={page}
          onPageChange={handlePageChange}
          paginatedContact={contactsData.paginatedContact}
        />
      ) : (
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h6'>문의 내역이 없습니다.</Typography>
        </Box>
      )}
    </Box>
  )
}
