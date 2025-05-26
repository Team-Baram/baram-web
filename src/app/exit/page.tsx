import { Stack, Typography } from '@mui/material'
import { BasicContainer } from '@/components'
import { ExitButtons } from './components'
import { getTranslations } from 'next-intl/server'

export default async function ExitPage() {
  const t = await getTranslations('Exit')

  return (
    <BasicContainer>
      <Stack spacing={7} sx={{ width: '100%' }}>
        <Typography
          variant='h5'
          color='text.primary'
          textAlign='center'
          sx={{ fontWeight: 'bold' }}
        >
          {t('head')}
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.primary'
          textAlign='center'
          sx={{ fontWeight: 'bold' }}
        >
          {t('message')}
        </Typography>
        <ExitButtons />
      </Stack>
    </BasicContainer>
  )
}
