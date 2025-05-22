import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAccessTokenCookieName } from '@/utils'

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(getAccessTokenCookieName())?.value
  const onBoarding = request.cookies.get('onboarding')?.value

  if (request.nextUrl.pathname.startsWith('/onboarding')) {
    if (!accessToken) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    if (!onBoarding) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
  }

  if (request.nextUrl.pathname.startsWith('/login')) {
    if (accessToken) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
  }

  if (request.nextUrl.pathname.startsWith('/my') || request.nextUrl.pathname.startsWith('/exit')) {
    if (!accessToken) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
  }

  return NextResponse.next()
}
