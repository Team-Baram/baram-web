'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Stack, Box, Button, FormControlLabel, Checkbox } from '@mui/material'
import { useDeleteUserMutation } from '@/queries'

export default function ExitButtons() {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const deleteUserMutation = useDeleteUserMutation()

  return (
    <Stack spacing={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box>
        <FormControlLabel
          label='회원 탈퇴 이후 삭제한 데이터를 복구할 수 없음을 이해했습니다.'
          control={<Checkbox checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />}
        />
        <Button
          variant='contained'
          fullWidth
          disabled={!isChecked}
          onClick={() => deleteUserMutation.mutate()}
        >
          회원 탈퇴
        </Button>
      </Box>
      <Link href='/'>
        <Button>회원 탈퇴 취소</Button>
      </Link>
    </Stack>
  )
}
