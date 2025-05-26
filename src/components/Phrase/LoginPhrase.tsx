import { Typography } from '@mui/material'
import { MobileContainer, DesktopContainer } from '@/components'
import { useTranslations } from 'next-intl'

export default function LoginPhrase() {
	const t = useTranslations('Phrase')

  return (
    <>
      <MobileContainer>
        <Typography
          variant='h5'
          color='text.primary'
          textAlign='center'
          sx={{ fontFamily: 'var(--font-playfiar)', fontWeight: 'bold' }}
        >
					{t('Mobile.login1')}
        </Typography>

        <Typography
          variant='h5'
          color='text.primary'
          textAlign='center'
          sx={{ fontFamily: 'var(--font-playfiar)', fontWeight: 'bold' }}
        >
					{t('Mobile.login2')}
        </Typography>
      </MobileContainer>
      <DesktopContainer>
        <Typography
          variant='h5'
          color='text.primary'
          textAlign='center'
          sx={{ fontFamily: 'var(--font-playfiar)', fontWeight: 'bold' }}
        >
					{t('Desktop.login')}
        </Typography>
      </DesktopContainer>
    </>
  )
}
