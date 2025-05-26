'use client'

import { Stack, Typography } from '@mui/material'
import type { ContactStatus } from '@/types'

interface ContactSummaryProps {
  contactSummary: {
    total: number
    pending: number
    answered: number
  }
  status?: ContactStatus
  onStatusChange: (status?: ContactStatus) => void
}

export default function ContactSummary({
  contactSummary,
  status,
  onStatusChange,
}: ContactSummaryProps) {
  const { total, pending, answered } = contactSummary

  return (
    <Stack
      direction='row'
      spacing={2}
      sx={{
        justifyContent: 'center',
        mt: 3,
        mb: 3,
        color: (theme) => (status === undefined ? '#000000' : theme.palette.grey[400]),
        height: '9vh',
      }}
    >
      <Stack
        sx={{ alignItems: 'center', px: 3, '&:hover': { cursor: 'pointer' } }}
        onClick={() => onStatusChange()}
      >
        <Typography variant='h3'>{total}</Typography>
        <Typography variant='subtitle1'>전체</Typography>
      </Stack>
      <Stack
        sx={{
          alignItems: 'center',
          px: 3,
          borderLeft: '1px solid',
          borderRight: '1px solid',
          borderColor: (theme) => theme.palette.grey[300],
          color: (theme) => (status === 'pending' ? '#000000' : theme.palette.grey[400]),
          '&:hover': { cursor: 'pointer' },
        }}
        onClick={() => onStatusChange('pending')}
      >
        <Typography variant='h3'>{pending}</Typography>
        <Typography variant='subtitle1'>대기</Typography>
      </Stack>
      <Stack
        sx={{
          alignItems: 'center',
          px: 3,
          color: (theme) => (status === 'answered' ? '#000000' : theme.palette.grey[400]),
          '&:hover': { cursor: 'pointer' },
        }}
        onClick={() => onStatusChange('answered')}
      >
        <Typography variant='h3'>{answered}</Typography>
        <Typography variant='subtitle1'>답변 완료</Typography>
      </Stack>
    </Stack>
  )
}
