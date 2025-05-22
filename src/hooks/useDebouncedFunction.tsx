import { useEffect, useCallback, useRef } from 'react'

export default function useDebouncedFunction(callback: () => void, delay: number) {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      callbackRef.current()
    }, delay)

    return () => clearTimeout(timeoutRef.current)
  }, [delay])
}
