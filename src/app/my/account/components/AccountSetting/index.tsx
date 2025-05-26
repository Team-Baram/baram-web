'use client'

import Link from 'next/link'
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Divider,
  Button,
} from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { useIsRestoring } from '@tanstack/react-query'
import { useFetchAccountQuery } from '@/queries'
import { Spinner } from '@/components' 
import NicknameForm from './NicknameForm'

export default function AccountSetting() {
  const isRestoring = useIsRestoring()
  const { isLoading, isError, error, data } = useFetchAccountQuery()

  if (isRestoring || isLoading) {
    return (
			<Spinner />
    )
  }

  if (isError) {
    throw error
  }

  const { email, name, nickname, mobile } = data.account

  return (
    <Stack spacing={2}>
      <Stack direction='row' sx={{ pb: 1 }}>
        <IconButton
          color='primary'
          sx={{ border: '2px solid', borderColor: 'divider', width: 80, height: 80 }}
        >
          <PersonOutlineIcon fontSize='large' />
        </IconButton>
        <Stack sx={{ ml: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant='subtitle2'>{name}</Typography>
          <Typography variant='subtitle2'>{email}</Typography>
        </Stack>
      </Stack>
      <NicknameForm nickname={nickname} />
      <Box sx={{ width: '100%', my: 2 }}>
        <Typography variant='subtitle2' color='textSecondary'>
          휴대폰 번호
        </Typography>
        <Button variant='text' fullWidth sx={{ justifyContent: 'space-between', pl: 0 }}>
          {mobile}
        </Button>
      </Box>
      <Divider />
      <Box>
        <Link href='/exit' style={{ textDecoration: 'none' }}>
          <Button variant='text' fullWidth sx={{ justifyContent: 'space-between', pl: 0 }}>
            회원 탈퇴
            <PlayArrowIcon sx={{ width: 15, height: 15 }} />
          </Button>
        </Link>
      </Box>
    </Stack>
  )
}
