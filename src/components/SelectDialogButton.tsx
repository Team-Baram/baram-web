'use client'

import { Box, Typography, Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface SelectDialogButtonProps {
  label: string
  value: string | number
  onClick: () => void
}

export default function SelectDialogButton({ label, value, onClick }: SelectDialogButtonProps) {
  return (
    <Box sx={{ width: '100%', my: 2 }}>
      <Typography variant='subtitle2' color='textSecondary'>
        {label}
      </Typography>
      <Button
        variant='text'
        onClick={onClick}
        fullWidth
        sx={{ justifyContent: 'space-between', pl: 0, textTransform: 'none' }}
      >
        {value}
        <PlayArrowIcon sx={{ width: 15, height: 15 }} />
      </Button>
    </Box>
  )
}
