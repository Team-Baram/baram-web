import { ReactNode } from 'react'
import { MyPage } from '@/components'

export default async function MyLayout({ children }: { children: ReactNode }) {
  return <MyPage>{children}</MyPage>
}
