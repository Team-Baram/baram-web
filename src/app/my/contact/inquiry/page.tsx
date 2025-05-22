
import { MyPageContainer, ErrorBoundary } from '@/components'
import { InquiryForm } from '../components'

export default async function Inquiry() {
	return (
		<MyPageContainer>
			<ErrorBoundary>
				<InquiryForm />
			</ErrorBoundary>
		</MyPageContainer>
	)
}

