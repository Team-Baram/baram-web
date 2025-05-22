import { Stack, Typography } from '@mui/material'
import { BasicContainer } from '@/components'
import { ExitButtons } from './components'	

export default async function ExitPage() {
  return (
    <BasicContainer>
      <Stack spacing={7} sx={{ width: '100%' }}>
        <Typography
          variant='h5'
          color='text.primary'
          textAlign='center'
          sx={{ fontWeight: 'bold' }}
        >
          회원 탈퇴 시 주의사항
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.primary'
          textAlign='center'
          sx={{ fontWeight: 'bold' }}
        >
          고객님의 모든 정보가 영구적으로 삭제되며, 복구가 불가능합니다.
        </Typography>
        <ExitButtons />
      </Stack>
    </BasicContainer>
  )
}
