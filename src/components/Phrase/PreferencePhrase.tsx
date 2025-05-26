import { Typography } from '@mui/material'
import { MobileContainer, DesktopContainer } from '@/components'
import { useTranslations } from 'next-intl'

export default function PreferencePhrase() {
	const t = useTranslations('Phrase')

  return (
    <>
      <MobileContainer>
        <Typography variant='h6' align='center'>
					{t('Mobile.preference1')}
        </Typography>
        <Typography variant='h6' align='center' gutterBottom>
					{t('Mobile.preference2')}
        </Typography>
      </MobileContainer>
      <DesktopContainer>
        <Typography variant='h6' align='center' gutterBottom>
					{t('Desktop.preference')}
        </Typography>
      </DesktopContainer>
    </>
  )
}
