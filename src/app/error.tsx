'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Stack, Button } from '@mui/material'
import { BasicContainer, ErrorPhrase } from '@/components'
import { useTranslations } from 'next-intl'

export default function Error({
  error,
  //reset,
}: {
  error: Error & { digest?: string }
  //reset: () => void
}) {
  const t = useTranslations('Error')
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
          {t('homeBtn')}
        </Button>
      </Stack>
    </BasicContainer>
  )
}
