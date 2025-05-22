'use client'

import { useRouter } from 'next/navigation'
import { Stack, Typography, Button } from '@mui/material'
import { BasicContainer } from '@/components'

export default function NotFound() {
  const router = useRouter()

  return (
    <BasicContainer>
      <Stack spacing={5}>
        <Typography variant='h6'>페이지를 찾을 수 없습니다.</Typography>
        <Button type='submit' variant='contained' onClick={() => router.push('/')}>
          홈페이지로 돌아가기
        </Button>
      </Stack>
    </BasicContainer>
  )
}
