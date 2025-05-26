import { MyPageContainer, ErrorBoundary } from '@/components'
import { ContactDetail } from '../components'

export default async function ContactDetailPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params

  return (
    <MyPageContainer>
      <ErrorBoundary>
        <ContactDetail id={id} />
      </ErrorBoundary>
    </MyPageContainer>
  )
}
