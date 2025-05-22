'use client'

import { useState, useEffect } from 'react'
import { Stack, IconButton, Divider, FormControlLabel, Switch, Typography, Snackbar } from '@mui/material'
import { useUpdateProfileMutation } from '@/queries'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

interface ProfileFormProps {
  avatarUrl: string
  nickname: string
  isReportPublic: boolean
}

export default function ProfileForm({
  avatarUrl,
  nickname,
  isReportPublic,
}: ProfileFormProps) {
	const [ isSnackbarOpen, setIsSnackbarOpen ] = useState<boolean>(false)
  const updateProfileMutation = useUpdateProfileMutation()

	useEffect(() => {
		if (updateProfileMutation.isSuccess) {
			setIsSnackbarOpen(true)
		}
	}, [updateProfileMutation.isSuccess])

  return (
    <>
      <Stack direction='row' sx={{ pb: 1 }}>
        <IconButton
          color='primary'
          sx={{ border: '2px solid', borderColor: 'divider', width: 80, height: 80 }}
        >
          {avatarUrl ? (
            <PersonOutlineIcon fontSize='large' />
          ) : (
            <PersonOutlineIcon fontSize='large' />
          )}
        </IconButton>
        <Stack sx={{ ml: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant='subtitle2'>{nickname}</Typography>
        </Stack>
      </Stack>
      <Divider />
      <Typography>공개 설정</Typography>
      <FormControlLabel
        control={
          <Switch
            checked={isReportPublic}
            onChange={() => {
              updateProfileMutation.mutate({ isReportPublic: !isReportPublic })
            }}
            color='secondary'
          />
        }
        label='전체 공개'
        sx={{ color: 'grey' }}
      />
			<Snackbar
				open={isSnackbarOpen}
				autoHideDuration={3000}
				onClose={() => setIsSnackbarOpen(false)}
				message="변경 사항이 저장되었습니다."
			/>
    </>
  )
}
