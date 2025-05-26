'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Stack, Button, Divider } from '@mui/material'
import { useLogoutMutation } from '@/queries'
import { useTranslations } from 'next-intl'

export default function DesktopMyPageMenu() {
  const t = useTranslations('My')
  const pathname = usePathname()
  const logoutMutation = useLogoutMutation()

  return (
    <Stack
      spacing={2}
      pt={2}
      sx={{
        height: '100%',
        borderRight: '1px solid',
        borderLeft: '1px solid',
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
            justifyContent: 'flex-start',
            pl: 2,
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
            justifyContent: 'flex-start',
            pl: 2,
          }}
        >
          {t('account')}
        </Button>
      </Link>
      <Divider />
      <Link href='/my/contact'>
        <Button
          fullWidth
          sx={{
            color: (theme) =>
              pathname.startsWith('/my/contact') ? 'text.primary' : theme.palette.grey[500],
            fontWeight: 500,
            justifyContent: 'flex-start',
            pl: 2,
          }}
        >
          {t('contact')}
        </Button>
      </Link>
      <Divider />
      <Button
        fullWidth
        sx={{
          color: (theme) => theme.palette.grey[500],
          fontWeight: 500,
          justifyContent: 'flex-start',
          pl: 2,
        }}
        onClick={() => logoutMutation.mutate()}
      >
        {t('logout')}
      </Button>
    </Stack>
  )
}
