import { Stack } from '@mui/material'
import { BasicContainer, PreferencePhrase } from '@/components'
import { PreferenceForm } from '@/app/onboarding/components'

export default async function PreferencePage() {
  return (
    <BasicContainer>
      <Stack>
        <PreferencePhrase />
        <PreferenceForm />
      </Stack>
    </BasicContainer>
  )
}
