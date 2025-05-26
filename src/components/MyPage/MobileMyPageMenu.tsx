'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Stack, Button } from '@mui/material'
import { useTranslations } from 'next-intl'

export default function MobileMyPageMenu() {
	const t = useTranslations('My')
  const pathname = usePathname('My')

  return (
    <Stack
      direction='row'
      spacing={2}
      py={2}
      sx={{
        width: '100%',
        height: '100%',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Link href='/my/profile'>
        <Button
          fullWidth
          sx={{
            color: (theme) =>
              pathname === '/my/profile' ? 'text.primary' : theme.palette.grey[500],
            fontWeight: 500,
          }}
        >
					{t('profile')}
        </Button>
      </Link>
      <Link href='/my/account'>
        <Button
          fullWidth
          sx={{
            color: (theme) =>
              pathname === '/my/account' ? 'text.primary' : theme.palette.grey[500],
            fontWeight: 500,
          }}
        >
					{t('account')}
        </Button>
      </Link>
    </Stack>
  )
}
