'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Toolbar, Box, Button, IconButton, Avatar } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import MobileHeaderMenu from './MobileHeaderMenu'
import { MobileContainer } from '@/components'
import { useTranslations } from 'next-intl'

interface MobileHeaderProps {
  isLogin: boolean
}

export default function MobileHeader({ isLogin }: MobileHeaderProps) {
  const t = useTranslations('Header')
  const pathname = usePathname()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <MobileContainer>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {pathname.startsWith('/onboarding') ? (
            <Image priority src='/logo.svg' alt='Baram Logo' width={120} height={65} />
          ) : (
            <Link href='/'>
              <Image priority src='/logo.svg' alt='Baram Logo' width={120} height={65} />
            </Link>
          )}
        </Box>
        {!pathname.startsWith('/onboarding') && (
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 3 }}>
            {!pathname.startsWith('/my') &&
              (isLogin ? (
                <IconButton
                  onClick={() => {
                    router.push('/my/profile')
                    setIsMenuOpen(false)
                  }}
                >
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
                !['/onboarding/nickname', '/onboarding/preference', '/login'].includes(
                  pathname,
                ) && (
                  <Link href='/login' onClick={() => setIsMenuOpen(false)}>
                    <Button>{t('login')}</Button>
                  </Link>
                )
              ))}
            {isMenuOpen ? (
              <IconButton onClick={() => setIsMenuOpen(false)}>
                <CloseIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => setIsMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        )}
      </Toolbar>
      {isMenuOpen && <MobileHeaderMenu isLogin={isLogin} closeMenu={() => setIsMenuOpen(false)} />}
    </MobileContainer>
  )
}
