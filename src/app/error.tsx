'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Stack, Button } from '@mui/material'
import { BasicContainer, ErrorPhrase } from '@/components'

export default function Error({
  error,
  //reset,
}: {
  error: Error & { digest?: string }
  //reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <BasicContainer>
      <Stack spacing={5} sx={{ display: 'flex', alignItems: 'center' }}>
        <ErrorPhrase />
        <Button fullWidth type='submit' variant='contained' onClick={() => router.push('/')}>
          홈페이지로 돌아가기
        </Button>
      </Stack>
    </BasicContainer>
  )
}
