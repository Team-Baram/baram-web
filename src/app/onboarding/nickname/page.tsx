import { Stack, Typography } from '@mui/material'
import { BasicContainer } from '@/components'
import { NicknameForm } from '@/app/onboarding/components'

export default async function NicknamePage() {
  return (
    <BasicContainer>
      <Stack>
        <Typography variant='h6' align='center' gutterBottom>
          Baram에서 사용할 이름을 입력해주세요.
        </Typography>
        <NicknameForm />
      </Stack>
    </BasicContainer>
  )
}
