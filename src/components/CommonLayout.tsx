import { ReactNode, CSSProperties } from 'react'
import { Container } from '@mui/material'

export const BasicContainer = ({ children, sx }: { children: ReactNode; sx?: CSSProperties }) => {
  return (
    <Container
      maxWidth='sm'
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      {children}
    </Container>
  )
}

export const MyPageContainer = ({ children, sx }: { children: ReactNode; sx?: CSSProperties }) => {
  return (
    <Container
      sx={{
        mx: 2,
        ...sx,
      }}
    >
      {children}
    </Container>
  )
}
