'use client'

import { useState, useEffect } from 'react'
import { TextField, Snackbar } from '@mui/material'
import { SelectDialogButton, CustomSaveDialog } from '@/components'
import { useValidateNickname } from '@/hooks'
import { useUpdateNicknameMutation } from '@/queries'

interface NicknameFormProps {
  nickname: string
}

export default function NicknameForm({ nickname }: NicknameFormProps) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false)
  const [newNickname, setNewNickname] = useState<string>(nickname)
  const { isLoading, validateNickname, isValid, isAvailable, helperText } =
    useValidateNickname(newNickname)

  const updateNicknameMutation = useUpdateNicknameMutation()

  useEffect(() => {
    if (updateNicknameMutation.isSuccess) {
      setIsSnackbarOpen(true)
    }
  }, [updateNicknameMutation.isSuccess])

  const handleError = () => {
    if (newNickname === '') return false
    if (nickname === newNickname) return false
    return !(isValid && isAvailable)
  }

  const handleBtnDisabled = () => {
    if (newNickname === '') return true
    if (nickname === newNickname) return true
    return !(isValid && isAvailable)
  }

  const handleHelperText = () => {
    if (nickname === newNickname) return '현재 사용 중인 이름입니다.'
    return helperText
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setNewNickname(text)
    validateNickname(text)
  }

  const cancel = () => {
    setNewNickname(nickname)
    setIsDialogOpen(false)
  }

  const save = () => {
    if (isLoading) return false

    if (newNickname) {
      updateNicknameMutation.mutate({ nickname: newNickname })
    }

    setIsDialogOpen(false)
  }

  return (
    <>
      <SelectDialogButton
        label={'바람 활동명'}
        value={nickname}
        onClick={() => setIsDialogOpen(true)}
      />
      <CustomSaveDialog
        label={'바람 활동명'}
        open={isDialogOpen}
        cancel={cancel}
        save={save}
        disabledBtn={handleBtnDisabled()}
      >
        <TextField
          fullWidth
          id='nickname'
          variant='standard'
          error={handleError()}
          helperText={handleHelperText()}
          value={newNickname}
          onChange={handleTextChange}
        />
      </CustomSaveDialog>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setIsSnackbarOpen(false)}
        message='변경 사항이 저장되었습니다.'
      />
    </>
  )
}
