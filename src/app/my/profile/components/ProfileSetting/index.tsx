'use client'

import { Stack, Box, Divider, CircularProgress } from '@mui/material'
import { useIsRestoring } from '@tanstack/react-query'
import { useFetchProfileQuery } from '@/queries'
import ProfileForm from './ProfileForm'
import PreferenceForm from './PreferenceForm'

export default function ProfileSetting() {
  const isRestoring = useIsRestoring()
  const { isLoading, isError, error, data } = useFetchProfileQuery()

  if (isRestoring || isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <CircularProgress sx={{ color: (theme) => theme.palette.grey[500] }} />
      </Box>
    )
  }

  if (isError) {
    throw error
  }

  const { avatarUrl, nickname, isReportPublic, preferences } = data.profile

  return (
    <Stack spacing={2}>
      <ProfileForm avatarUrl={avatarUrl} nickname={nickname} isReportPublic={isReportPublic} />
      <Divider />
      {preferences.length && <PreferenceForm id={preferences[0].id} preference={preferences[0]} />}
    </Stack>
  )
}
