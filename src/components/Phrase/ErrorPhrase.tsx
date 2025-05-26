import { Stack, Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { useTranslations } from 'next-intl'

export default function ErrorPhrase() {
  const t = useTranslations('Phrase')

  return (
    <>
      <Stack direction='row' spacing={0.5} sx={{ alignItems: 'center' }}>
        <ErrorOutlineIcon fontSize='large' />
        <Typography variant='h6'>{t('Common.error1')}</Typography>
      </Stack>
      <Typography variant='body1'>{t('Common.error2')}</Typography>
    </>
  )
}
