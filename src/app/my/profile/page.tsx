'use server'

import { MyPageContainer, ProfileSetting } from '@/components'
import { ErrorBoundary } from '@/components'

export default async function ProfilePage() {
  return (
    <MyPageContainer>
      <ErrorBoundary>
        <ProfileSetting />
      </ErrorBoundary>
    </MyPageContainer>
  )
}
