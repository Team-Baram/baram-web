import { Stack, Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export default function ErrorPhrase() {
  return (
    <>
      <Stack direction='row' spacing={0.5} sx={{ alignItems: 'center' }}>
        <ErrorOutlineIcon fontSize='large' />
        <Typography variant='h6'>오류 안내</Typography>
      </Stack>
      <Typography variant='body1'>
        예상하지 못한 오류가 발생했습니다. 서버의 일시적인 장애이거나 네트워크 문제일 수 있습니다.
      </Typography>
    </>
  )
}
