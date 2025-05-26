'use client'

import Cookies from 'js-cookie'
import { getAccessTokenCookieName } from '@/utils'

export const removeAccessToken = () => {
  Cookies.remove(getAccessTokenCookieName())
}

export const getAccessToken = () => {
  return Cookies.get(getAccessTokenCookieName())
}
