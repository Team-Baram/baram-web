'use client'

import Link from 'next/link'
import { Toolbar, Box, Stack, Button, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Box
        sx={{
          mt: 2,
          px: 2,
          py: 1,
          borderTop: '1px solid',
          borderColor: 'divider',
          width: '100%',
          height: '20px',
        }}
      >
        <Stack direction='row'>
          <Link href='/terms'>
            <Button sx={{ color: (theme) => theme.palette.grey[400] }}>이용약관</Button>
          </Link>
          <Link href='/privacy'>
            <Button sx={{ color: (theme) => theme.palette.grey[400] }}>개인정보 처리방침</Button>
          </Link>
        </Stack>
        <Typography sx={{ ml: 1, color: (theme) => theme.palette.grey[500] }}>
          2025 Baram
        </Typography>
      </Box>
    </Toolbar>
  )
}
