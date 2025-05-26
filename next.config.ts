import type { NextConfig } from 'next'
import createNextIntPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  /* config options here */
	devIndicators: false
}

const withNextIntl = createNextIntPlugin()

export default withNextIntl(nextConfig)
