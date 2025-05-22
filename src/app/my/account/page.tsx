import { MyPageContainer, ErrorBoundary } from '@/components'
import { AccountSetting } from './components'

export default async function AccountPage() {
  return (
    <MyPageContainer>
      <ErrorBoundary>
        <AccountSetting />
      </ErrorBoundary>
    </MyPageContainer>
  )
}
