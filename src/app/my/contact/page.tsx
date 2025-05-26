import { MyPageContainer, ErrorBoundary } from '@/components'
import { ContactContainer } from './components'

export default async function Contact() {
  return (
    <MyPageContainer sx={{ height: '100%' }}>
      <ErrorBoundary>
        <ContactContainer />
      </ErrorBoundary>
    </MyPageContainer>
  )
}
