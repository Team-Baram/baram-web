'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Box, TextField, Button } from '@mui/material'
import { useValidateNickname } from '@/hooks'
import { useUpdateNicknameMutation } from '@/queries'
import { useTranslations } from 'next-intl'

export default function NicknameForm() {
  const t = useTranslations()
  const router = useRouter()
  const [nickname, setNickname] = useState<string>('')
  const { isLoading, validateNickname, isValid, isAvailable, helperText } =
    useValidateNickname(nickname)

  const updateNicknameMutation = useUpdateNicknameMutation()

  useEffect(() => {
    if (updateNicknameMutation.isSuccess) {
      router.push('/onboarding/preference')
    }
  }, [updateNicknameMutation.isSuccess])

  const hasError = nickname !== '' && !(isValid && isAvailable)
  const isBtnDisabled = nickname === '' || !(isValid && isAvailable)

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setNickname(text)
    validateNickname(text)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLoading) return

    if (nickname) {
      updateNicknameMutation.mutate({ nickname })
    }
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 4 }}
    >
      <TextField
        fullWidth
        id='nickname'
        label={t('Onboarding.Nickname.label')}
        variant='standard'
        error={hasError}
        helperText={helperText}
        value={nickname}
        onChange={handleTextChange}
      />
      <Button
        type='submit'
        fullWidth
        disabled={isBtnDisabled}
        variant='contained'
        sx={{ mt: 3 }}
      >
        {t('Common.next')}
      </Button>
    </Box>
  )
}
