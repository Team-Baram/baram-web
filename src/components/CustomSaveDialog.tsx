'use client'

import { ReactNode } from 'react'
import { Dialog, DialogTitle, DialogContent, Stack, Button } from '@mui/material'
import { useTranslations } from 'next-intl'

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
	const t = useTranslations('Common')

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
						{t('cancel')}
          </Button>
          <Button variant='contained' disabled={disabledBtn} onClick={save}>
						{t('save')}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
