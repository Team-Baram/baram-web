'use client'

import { ReactNode } from 'react'
import { Dialog, DialogTitle, DialogContent, Stack, Button } from '@mui/material'

interface CustomSaveDialogProps {
  children: ReactNode
  label: string
  open: boolean
  cancel: () => void
  save: () => void
  disabledBtn?: boolean
  //fullScreen: boolean
}

export default function CustomSaveDialog({
  children,
  label,
  open,
  cancel,
  save,
  disabledBtn = false,
  //fullScreen,
}: CustomSaveDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={close}
      fullScreen={false}
      fullWidth
      maxWidth='xs'
      PaperProps={{ sx: { backgroundColor: '#ffffff' } }}
    >
      <DialogTitle>{label}</DialogTitle>
      <DialogContent dividers>
        {children}
        <Stack mt={2} spacing={1} direction='row' sx={{ justifyContent: 'flex-end' }}>
          <Button variant='outlined' onClick={cancel}>
            취소
          </Button>
          <Button variant='contained' disabled={disabledBtn} onClick={save}>
            저장
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
