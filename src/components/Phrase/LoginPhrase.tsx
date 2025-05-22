import { Typography } from '@mui/material'
import { MobileContainer, DesktopContainer } from '@/components'

export default function LoginPhrase() {
  return (
    <>
      <MobileContainer>
        <Typography
          variant='h5'
          color='text.primary'
          textAlign='center'
          sx={{ fontFamily: 'var(--font-playfiar)', fontWeight: 'bold' }}
        >
          당신의 바람,
        </Typography>

        <Typography
          variant='h5'
          color='text.primary'
          textAlign='center'
          sx={{ fontFamily: 'var(--font-playfiar)', fontWeight: 'bold' }}
        >
          Baram과 함께 이뤄보세요.
        </Typography>
      </MobileContainer>
      <DesktopContainer>
        <Typography
          variant='h5'
          color='text.primary'
          textAlign='center'
          sx={{ fontFamily: 'var(--font-playfiar)', fontWeight: 'bold' }}
        >
          당신의 바람, Baram과 함께 이뤄보세요.
        </Typography>
      </DesktopContainer>
    </>
  )
}
