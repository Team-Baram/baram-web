'use client'

import { useState } from 'react'
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

  if (updateNicknameMutation.isSuccess) {
    router.push('/onboarding/preference')
  }

  const handleError = () => {
    if (nickname === '') return false
    return !(isValid && isAvailable)
  }

  const handleBtnDisabled = () => {
    if (nickname === '') return true
    return !(isValid && isAvailable)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setNickname(text)
    validateNickname(text)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLoading) return false

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
        error={handleError()}
        helperText={helperText}
        value={nickname}
        onChange={handleTextChange}
      />
      <Button
        type='submit'
        fullWidth
        disabled={handleBtnDisabled()}
        variant='contained'
        sx={{ mt: 3 }}
      >
        {t('Common.next')}
      </Button>
    </Box>
  )
}
