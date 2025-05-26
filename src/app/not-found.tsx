'use client'

import { useRouter } from 'next/navigation'
import { Stack, Typography, Button } from '@mui/material'
import { BasicContainer } from '@/components'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('NotFound')
  const router = useRouter()

  return (
    <BasicContainer>
      <Stack spacing={5}>
        <Typography variant='h6'>{t('header')}</Typography>
        <Button type='submit' variant='contained' onClick={() => router.push('/')}>
          {t('homeBtn')}
        </Button>
      </Stack>
    </BasicContainer>
  )
}
