export const base64urlEncode = (str: string) => {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export const getAccessTokenCookieName = () => {
  return base64urlEncode(process.env.NEXT_PUBLIC_BARAM_ACCESS_TOKEN_NAME)
}
