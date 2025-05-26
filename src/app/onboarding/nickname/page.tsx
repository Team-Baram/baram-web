import { Stack, Typography } from '@mui/material'
import { BasicContainer } from '@/components'
import { NicknameForm } from '@/app/onboarding/components'
import { getTranslations } from 'next-intl/server'

export default async function NicknamePage() {
	const t = await getTranslations('Onboarding')

  return (
    <BasicContainer>
      <Stack>
        <Typography variant='h6' align='center' gutterBottom>
					{t('Nickname.head')}
        </Typography>
        <NicknameForm />
      </Stack>
    </BasicContainer>
  )
}
