'use client'

import { ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'

interface CustomDialogProps {
  children: ReactNode
  label: string
  open: boolean
  fullScreen: boolean
  close: () => void
}

export default function CustomDialog({
  children,
  label,
  open,
  fullScreen,
  close,
}: CustomDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={close}
      fullScreen={fullScreen}
      fullWidth
      maxWidth='xs'
      PaperProps={{ sx: { backgroundColor: '#ffffff' } }}
    >
      <DialogTitle>
        {label}
        <IconButton
          aria-label='close'
          onClick={close}
          sx={{
            position: 'absolute',
            right: 8,
            top: 11,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  )
}
