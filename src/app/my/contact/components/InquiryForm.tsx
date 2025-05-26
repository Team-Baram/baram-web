'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Stack, TextField, Button, Typography } from '@mui/material'
import { useCreateContactMutation } from '@/queries'

export default function InquiryForm() {
  const router = useRouter()
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const createContactMutation = useCreateContactMutation()

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 55) return
    setTitle(e.target.value)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const handleCancel = () => {
    router.push('/my/contact')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title === '' || content === '') return false
    createContactMutation.mutate({ title, content })
  }

  const handleBtnDisabled = () => {
    if (title === '' || content === '') return true
    return false
  }

  return (
    <Box component='form' onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant='h5'>문의등록</Typography>
      </Box>
      <TextField
        fullWidth
        id='title'
        label='제목'
        variant='outlined'
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        fullWidth
        id='outlined-multiline-static'
        label='내용'
        helperText='서비스의  불편사항과 더불어 원하시는 기능을 문의해주셔도 좋습니다.'
        variant='outlined'
        multiline
        rows={15}
        value={content}
        onChange={handleContentChange}
        sx={{ mt: 2 }}
      />
      <Stack mt={2} spacing={1} direction='row' sx={{ justifyContent: 'flex-end' }}>
        <Button variant='outlined' sx={{ mt: 3 }} onClick={handleCancel}>
          취소
        </Button>
        <Button type='submit' disabled={handleBtnDisabled()} variant='contained' sx={{ mt: 3 }}>
          등록
        </Button>
      </Stack>
    </Box>
  )
}
