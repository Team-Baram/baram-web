'use server'

import { MyPageContainer, ErrorBoundary } from '@/components'
import { ProfileSetting } from './components'

export default async function ProfilePage() {
  return (
    <MyPageContainer>
      <ErrorBoundary>
        <ProfileSetting />
      </ErrorBoundary>
    </MyPageContainer>
  )
}
