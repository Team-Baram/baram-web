import { Stack } from '@mui/material'
import { BasicContainer, LoginPhrase } from '@/components'
import { SocialLoginButtons } from './components'

export default async function LoginPage() {
  return (
    <BasicContainer>
      <Stack spacing={10} sx={{ width: '100%' }}>
        <LoginPhrase />
        <SocialLoginButtons />
      </Stack>
    </BasicContainer>
  )
}
