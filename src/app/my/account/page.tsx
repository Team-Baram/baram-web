import { MyPageContainer, AccountSetting, ErrorBoundary } from '@/components'

export default async function AccountPage() {
  return (
    <MyPageContainer>
      <ErrorBoundary>
        <AccountSetting />
      </ErrorBoundary>
    </MyPageContainer>
  )
}
