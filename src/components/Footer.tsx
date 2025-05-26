'use client'

import Link from 'next/link'
import { Toolbar, Box, Stack, Button, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Box
        sx={{
          mt: 2,
          px: 2,
          py: 1,
          borderTop: '1px solid',
          borderColor: 'divider',
          width: '100%',
          height: '20px',
        }}
      >
        <Stack direction='row'>
          <Link href='/terms'>
            <Button sx={{ color: (theme) => theme.palette.grey[400] }}>{t('termsOfUse')}</Button>
          </Link>
          <Link href='/privacy'>
            <Button sx={{ color: (theme) => theme.palette.grey[400] }}>{t('privacyPolicy')}</Button>
          </Link>
        </Stack>
        <Typography sx={{ ml: 1, color: (theme) => theme.palette.grey[500] }}>
          2025 Baram
        </Typography>
      </Box>
    </Toolbar>
  )
}
