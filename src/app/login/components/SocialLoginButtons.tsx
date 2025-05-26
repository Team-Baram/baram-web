'use client'

import { Stack, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useNaverLoginQuery } from '@/queries'
import { useTranslations } from 'next-intl'

export default function SocialLoginButtons() {
	const t = useTranslations('Login')
  const router = useRouter()
  const { data } = useNaverLoginQuery()

  return (
    <Stack spacing={2} alignItems='center'>
      <Button
        fullWidth
        variant='contained'
        startIcon={<Image src='/naver.svg' alt='naver' width={18} height={18} />}
        sx={{
          backgroundColor: '#03C75A',
          color: '#ffffff',
          textTransform: 'none',
          maxWidth: 320,
        }}
        onClick={() => router.push(data.apiUrl)}
      >
				{t('naver')}
      </Button>
      <Button
        fullWidth
        variant='contained'
        startIcon={<Image src='/kakao.svg' alt='naver' width={20} height={20} />}
        sx={{
          backgroundColor: '#FEE500',
          color: '#000000',
          textTransform: 'none',
          maxWidth: 320,
        }}
      >
				{t('kakao')}
      </Button>
      <Button
        fullWidth
        variant='contained'
        startIcon={<Image src='/google.svg' alt='naver' width={20} height={20} />}
        sx={{
          backgroundColor: '#ffffff',
          color: '#000000',
          textTransform: 'none',
          maxWidth: 320,
        }}
      >
				{t('google')}
      </Button>
    </Stack>
  )
}
