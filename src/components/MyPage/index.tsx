'use client'

import { ReactNode } from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import DesktopMyPageMenu from './DesktopMyPageMenu'
import MobileMyPageMenu from './MobileMyPageMenu'
import { MobileContainer, DesktopContainer } from '@/components'

const MyPageMobileContainer = styled(MobileContainer)`
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MyPageDesktopContainer = styled(DesktopContainer)`
  padding: 0 150px;
  width: calc(100% - 300px);
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default function MyPage({ children }: { children: ReactNode }) {

  return (
    <>
      <MyPageMobileContainer display='flex'>
        <Box
          mb={2}
          sx={{
            width: '100%',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MobileMyPageMenu />
        </Box>
        <Box
          flex={1}
          sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', mt: 3 }}
        >
          {children}
        </Box>
      </MyPageMobileContainer>
      <MyPageDesktopContainer display='flex'>
        <Box
          mr={2}
          sx={{
            width: '250px',
            height: '100%',
          }}
        >
          <DesktopMyPageMenu />
        </Box>
        <Box
          flex={1}
          sx={{
            height: '100%',
            borderRight: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: 5,
          }}
        >
          {children}
        </Box>
      </MyPageDesktopContainer>
    </>
  )
}
