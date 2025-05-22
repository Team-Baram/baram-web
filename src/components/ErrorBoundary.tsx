'use client'

import { Component, ReactNode, ErrorInfo } from 'react'
import { Box, Stack, Button } from '@mui/material'
import { ErrorPhrase } from '@/components'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <Box>
            <Stack spacing={5}>
              <ErrorPhrase />
              <Button type='submit' variant='contained' onClick={this.handleReset}>
                다시 시도하기
              </Button>
            </Stack>
          </Box>
        )
      )
    }

    return this.props.children
  }
}
