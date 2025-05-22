'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Stack, TextField, Button } from '@mui/material'
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
		<Box
			component='form'
			onSubmit={handleSubmit}
			sx={{ width: '100%' }}
		>
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
				variant='outlined'
				multiline
				rows={15}
				value={content}
				onChange={handleContentChange}
				sx={{ mt: 2 }}
			/>	
			<Stack mt={2} spacing={1} direction='row' sx={{ justifyContent: 'flex-end' }}>
				<Button
					variant='outlined'
					sx={{ mt: 3 }}
					onClick={handleCancel}
				>
				취소
				</Button>
				<Button
					type='submit'
					disabled={handleBtnDisabled()}
					variant='contained'
					sx={{ mt: 3 }}
				>
				저장
				</Button>
			</Stack>
		</Box>
	)
}
