import { useState } from 'react'
import { useDebouncedValue } from '@/hooks'
import { useValidateNicknameQuery } from '@/queries'

export default function useValidateNickname(nickname: string) {
  const [isValid, setIsValid] = useState<boolean>(true)

  const debouncedNickname = useDebouncedValue(nickname, 500)
  const { isLoading, isError, error, data } = useValidateNicknameQuery(debouncedNickname, isValid)
  if (isError) {
    throw error
  }

  const isAvailable = data ? data.isAvailable : true
  const helperText =
    isValid && isAvailable ? '' : !isValid ? '사용할 수 없는 이름입니다.' : '사용 중인 이름입니다.'

  const validateNickname = (nickname: string) => {
    const nicknameRegex = /^(?!.*[_.]{2})(?![_.])[a-zA-Z가-힣0-9._]{2,12}(?<![_.])$/
    setIsValid(nicknameRegex.test(nickname))
  }

  return { isLoading, validateNickname, isValid, isAvailable, helperText }
}
