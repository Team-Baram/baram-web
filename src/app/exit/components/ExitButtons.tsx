'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Stack, Box, Button, FormControlLabel, Checkbox } from '@mui/material'
import { useDeleteUserMutation } from '@/queries'
import { useTranslations } from 'next-intl'

export default function ExitButtons() {
  const t = useTranslations('Exit')
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const deleteUserMutation = useDeleteUserMutation()

  return (
    <Stack spacing={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box>
        <FormControlLabel
          label={t('label')}
          control={<Checkbox checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />}
        />
        <Button
          variant='contained'
          fullWidth
          disabled={!isChecked}
          onClick={() => deleteUserMutation.mutate()}
        >
          {t('exitBtn')}
        </Button>
      </Box>
      <Link href='/'>
        <Button>{t('cancel')}</Button>
      </Link>
    </Stack>
  )
}
