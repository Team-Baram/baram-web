'use client'

import { Stack, Box, Divider } from '@mui/material'
import { useIsRestoring } from '@tanstack/react-query'
import { useFetchProfileQuery, useRedirectOnBoardingMutation } from '@/queries'
import { Spinner } from '@/components'
import ProfileForm from './ProfileForm'
import PreferenceForm from './PreferenceForm'

export default function ProfileSetting() {
  const isRestoring = useIsRestoring()
  const { isLoading, isError, isSuccess, error, data } = useFetchProfileQuery()
	//const redirectOnBoardingMutation = useRedirectOnBoardingMutation()

  if (isRestoring || isLoading) {
    return (
			<Spinner />
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
      {preferences.length > 0 && <PreferenceForm id={preferences[0].id} preference={preferences[0]} />}
    </Stack>
  )
}
