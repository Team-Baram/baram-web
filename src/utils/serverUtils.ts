'use server'

import { cookies } from 'next/headers'
import { getAccessTokenCookieName } from '@/utils'

const getCookieValue = async (name: string) => {
  const cookieStore = await cookies()
  return cookieStore.get(name)?.value
}

export const getAccessToken = async () => {
  return await getCookieValue(getAccessTokenCookieName())
}
