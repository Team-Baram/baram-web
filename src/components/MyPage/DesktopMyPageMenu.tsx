'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Stack, Button, Divider } from '@mui/material'
import { useLogoutMutation } from '@/queries'

export default function DesktopMyPageMenu() {
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
          프로필
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
          계정 설정
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
          문의 하기
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
        로그아웃
      </Button>
    </Stack>
  )
}
