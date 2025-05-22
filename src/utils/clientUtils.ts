'use client'

import Cookies from 'js-cookie'
import { getAccessTokenCookieName } from '@/utils'

export const setAccessToken = (token: string) => {
  Cookies.set(ACCESS_TOKEN_NAME, token, {
    secure: true,
    expires: 1,
  })
}

export const removeAccessToken = () => {
  Cookies.remove(getAccessTokenCookieName())
}

export const getAccessToken = () => {
  return Cookies.get(getAccessTokenCookieName())
}
