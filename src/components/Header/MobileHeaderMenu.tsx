'use client'

import Link from 'next/link'
import { Box, Stack, Typography, Divider } from '@mui/material'
import { useLogoutMutation } from '@/queries'

interface MobileHeaderMenuProps {
  isLogin: boolean
  closeMenu: () => void
}

export default function MobileHeaderMenu({ isLogin, closeMenu }: MobileHeaderMenuProps) {
  const logoutMutation = useLogoutMutation()

  return (
    <Box
      sx={(theme) => ({
        position: 'fixed',
        top: '56px',
        left: 0,
        right: 0,
        width: '100%',
        height: `calc(100% - 56px)`,
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Stack spacing={2} sx={{ my: 3 }}>
        <Link href='/record' style={{ textDecoration: 'none' }} onClick={closeMenu}>
          <Typography
            variant='subtitle1'
            gutterBottom
            sx={{ px: 6, color: 'text.primary', fontWeight: 'bold' }}
          >
            기록
          </Typography>
        </Link>
        <Link href='/course' style={{ textDecoration: 'none' }} onClick={closeMenu}>
          <Typography
            variant='subtitle1'
            gutterBottom
            sx={{ px: 6, color: 'text.primary', fontWeight: 'bold' }}
          >
            코스
          </Typography>
        </Link>
        {isLogin && (
          <>
            <Divider sx={{ mb: 1.5, mx: 1.5 }} />
            <Box onClick={() => logoutMutation.mutate()}>
              <Typography
                variant='subtitle1'
                gutterBottom
                sx={(theme) => ({
                  px: 6,
                  color: theme.palette.grey[500],
                  fontWeight: 'bold',
                  cursor: 'pointer',
                })}
              >
                로그아웃
              </Typography>
            </Box>
          </>
        )}
      </Stack>
    </Box>
  )
}
