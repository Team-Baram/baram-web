'use client'

import { useIsRestoring } from '@tanstack/react-query'
import { useFetchContactQuery } from '@/queries'
import { Box, Stack, Divider, Typography } from '@mui/material'
import { Spinner } from '@/components'
import dayjs from 'dayjs'

interface ContactDetailProps {
  id: string
}

export default function ContactDetail({ id }: ContactDetailProps) {
  const isRestoring = useIsRestoring()
  const { isLoading, isError, error, data } = useFetchContactQuery(id)

  if (isRestoring || isLoading) {
    return <Spinner />
  }

  if (isError) {
    throw error
  }

  const { title, content, status, answer, createdAt, answeredAt } = data.contact

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h5' sx={typographyStyle}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', mb: 2 }}>
        <Typography variant='subtitle2' mr={1}>
          작성일: {dayjs(createdAt).format('YYYY.MM.DD')}
        </Typography>
        <Typography variant='subtitle2'>
          상태: {status === 'pending' ? '대기' : '답변 완료'}
        </Typography>
      </Box>
      <Typography variant='h5' sx={typographyStyle}>
        {content}
      </Typography>
      <Divider sx={{ my: 2 }} />
      {answer && (
        <>
          <Typography variant='subtitle2' mt={2}>
            답변
          </Typography>
          <Typography variant='h5' sx={typographyStyle}>
            {answer}
          </Typography>
        </>
      )}
    </Box>
  )
}

const typographyStyle = {
  overflowWrap: 'break-word',
  maxWidth: { sm: '50vw' },
}
