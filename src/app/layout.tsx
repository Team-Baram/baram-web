import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import { Box } from '@mui/material'
import { ReactQueryProvider, RecoilProvider, ThemeProvider } from '@/providers'
import { Header, Footer } from '@/components'
import { theme } from '@/utils'
import { getAccessToken } from '@/utils/serverUtils'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your Pace, Your Baram',
  description: 'Runnging',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
	const locale = await getLocale()
  const accessToken = await getAccessToken()

  return (
    <html lang={locale} className={playfair.className}>
      <body>
				<NextIntlClientProvider>
        	<ThemeProvider>
        	  <ReactQueryProvider>
        	    <RecoilProvider>
        	      <Box
        	        sx={{
        	          minHeight: '100vh',
        	          height: '100%',
        	          display: 'flex',
        	          flexDirection: 'column',
        	        }}
        	      >
        	        <Header isLogin={!!accessToken} />
        	        <Box
        	          sx={{
        	            flexGrow: 1,
        	            pt: '64px',
        	            backgroundColor: theme.palette.background.default,
        	          }}
        	        >
        	          {children}
        	        </Box>
        	        <Footer />
        	      </Box>
        	    </RecoilProvider>
        	  </ReactQueryProvider>
        	</ThemeProvider>
				</NextIntlClientProvider>
      </body>
    </html>
  )
}
