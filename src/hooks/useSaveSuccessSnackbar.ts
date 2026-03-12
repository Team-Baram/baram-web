import { useState, useEffect } from 'react'

export default function useSaveSuccessSnackbar(isSuccess: boolean) {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)

  useEffect(() => {
    if (isSuccess) setIsSnackbarOpen(true)
  }, [isSuccess])

  return { isSnackbarOpen, closeSnackbar: () => setIsSnackbarOpen(false) }
}
