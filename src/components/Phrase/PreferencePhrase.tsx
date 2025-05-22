import { Typography } from '@mui/material'
import { MobileContainer, DesktopContainer } from '@/components'

export default function PreferencePhrase() {
  return (
    <>
      <MobileContainer>
        <Typography variant='h6' align='center'>
          아래 정보를 추가하면
        </Typography>
        <Typography variant='h6' align='center' gutterBottom>
          적절한 코스를 추천해 드려요 !
        </Typography>
      </MobileContainer>
      <DesktopContainer>
        <Typography variant='h6' align='center' gutterBottom>
          아래 정보를 추가하면 적절한 코스를 추천해 드려요 !
        </Typography>
      </DesktopContainer>
    </>
  )
}
