import { Typography } from '@mui/material'
import { MobileContainer, DesktopContainer } from '@/components'
import { useTranslations } from 'next-intl'

export default function LandingPhrase() {
  const t = useTranslations('Phrase')

  return (
    <>
      <MobileContainer>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          {t('Mobile.landing1')}
        </Typography>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          {t('Mobile.landing2')}
        </Typography>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          {t('Mobile.landing3')}
        </Typography>
      </MobileContainer>
      <DesktopContainer>
        <Typography variant='h2' sx={{ textAlign: 'center' }}>
          {t('Desktop.landing1')}
        </Typography>
        <Typography variant='h2' sx={{ textAlign: 'center' }}>
          {t('Desktop.landing2')}
        </Typography>
      </DesktopContainer>
    </>
  )
}
