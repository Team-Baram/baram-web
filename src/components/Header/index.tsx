'use client'

import { AppBar, useTheme, useMediaQuery } from '@mui/material'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

interface HeaderProps {
  isLogin: boolean
}

export default function Header({ isLogin }: HeaderProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const height = isMobile ? 56 : 64

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={(theme) => ({
        height: `${height}px`,
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
        borderColor: theme.palette.divider,
      })}
    >
      <MobileHeader isLogin={isLogin} />
      <DesktopHeader isLogin={isLogin} />
    </AppBar>
  )
}
