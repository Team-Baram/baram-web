'use client'

import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Toolbar, Box, Button, IconButton, Avatar } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { DesktopContainer } from '@/components'
import { useTranslations } from 'next-intl'

interface DesktopHeaderProps {
  isLogin: boolean
}

export default function DesktopHeader({ isLogin }: DesktopHeaderProps) {
  const t = useTranslations('Header')
  const pathname = usePathname()
  const router = useRouter()

  return (
    <DesktopContainer>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {pathname.startsWith('/onboarding') ? (
            <Image src='/logo.svg' alt='Baram Logo' width={120} height={65} />
          ) : (
            <>
              <Link href='/'>
                <Image src='/logo.svg' alt='Baram Logo' width={120} height={65} />
              </Link>
              <Link href='/record'>
                <Button sx={{ color: 'text.primary', fontWeight: 500 }}>{t('record')}</Button>
              </Link>
              <Link href='/course'>
                <Button sx={{ color: 'text.primary', fontWeight: 500 }}>{t('course')}</Button>
              </Link>
            </>
          )}
        </Box>
        {!['/onboarding/nickname', '/onboarding/preference', '/login'].includes(pathname) && (
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 3 }}>
            {isLogin ? (
              <IconButton onClick={() => router.push('/my/profile')}>
                <PersonOutlineIcon />
                {false && (
                  <Avatar
                    alt='User Profile'
                    src={'/person_24dp.svg'}
                    sx={{ width: 24, height: 24 }}
                  />
                )}
              </IconButton>
            ) : (
              <Link href='/login'>
                <Button>{t('login')}</Button>
              </Link>
            )}
          </Box>
        )}
      </Toolbar>
    </DesktopContainer>
  )
}
