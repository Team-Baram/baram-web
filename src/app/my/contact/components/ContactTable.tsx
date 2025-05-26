'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Stack, Box, Typography, Pagination, Button, Divider } from '@mui/material'
import dayjs from 'dayjs'

interface ContactTableProps {
  page: number
  onPageChange: (e: React.ChageEvent, page: number) => void
  paginatedContact: {
    data: any[]
    total: number
    limit: number
  }
}

export default function ContactTable({ page, onPageChange, paginatedContact }: ContactTableProps) {
  const router = useRouter()
  const { data: contacts, total, limit } = paginatedContact

  return (
    <>
      <Stack direction='row' sx={{ pl: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='subtitle2'>제목</Typography>
        </Box>
        <Box sx={{ width: '150px' }}>
          <Typography align='center' variant='subtitle2'>
            작성날짜
          </Typography>
        </Box>
        <Box sx={{ width: '100px' }}>
          <Typography align='center' variant='subtitle2'>
            진행상태
          </Typography>
        </Box>
      </Stack>
      {contacts.map((inquiry) => (
        <Stack
          key={inquiry.id}
          direction='row'
          sx={{
            justifyContent: 'space-between',
            pl: 3,
            py: 1,
            borderBottom: '1px solid',
            borderColor: (theme) => theme.palette.grey[300],
            '&:hover': { backgroundColor: (theme) => theme.palette.grey[100], cursor: 'pointer' },
          }}
          onClick={() => router.push(`/my/contact/${inquiry.id}`)}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant='subtitle2'
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                width: '27vw',
              }}
            >
              {inquiry.title ?? ''}
            </Typography>
          </Box>
          <Box sx={{ width: '150px' }}>
            <Typography align='center' variant='subtitle2'>
              {inquiry.createdAt ? dayjs(inquiry.createdAt).format('YYYY.MM.DD') : ''}
            </Typography>
          </Box>
          <Box sx={{ width: '100px' }}>
            <Typography align='center' variant='subtitle2'>
              {inquiry.status ? (inquiry.status === 'pending' ? '대기' : '답변 완료') : ''}
            </Typography>
          </Box>
        </Stack>
      ))}
      <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', mt: 3 }}>
        <Pagination
          count={Math.ceil(total / limit)}
          page={page}
          onChange={onPageChange}
          showFirstButton
          showLastButton
        />
      </Stack>
    </>
  )
}
