import { Typography } from '@mui/material'
import { MobileContainer, DesktopContainer } from '@/components'

export default function LandingPhrase() {
  return (
    <>
      <MobileContainer>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          각자의 페이스가
        </Typography>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          만드는
        </Typography>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          새로운 바람
        </Typography>
      </MobileContainer>
      <DesktopContainer>
        <Typography variant='h2' sx={{ textAlign: 'center' }}>
          각자의 페이스가 만드는
        </Typography>
        <Typography variant='h2' sx={{ textAlign: 'center' }}>
          새로운 바람
        </Typography>
      </DesktopContainer>
    </>
  )
}
