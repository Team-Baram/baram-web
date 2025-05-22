import { Container, Stack, Box, Typography } from '@mui/material'
import { Motion, LandingPhrase } from '@/components'

export default async function LandingPage() {
  return (
    <Container sx={{ width: '100%' }}>
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <Box sx={{ scrollSnapAlign: 'start', height: '100vh' }}>
          <Motion>
            <Stack>
              <LandingPhrase />
            </Stack>
          </Motion>
        </Box>
        <Box sx={{ scrollSnapAlign: 'start', height: '100vh' }}>
          <Motion>
            <Typography variant='h2'>section2</Typography>
          </Motion>
        </Box>
        <Box sx={{ scrollSnapAlign: 'start', height: '100vh' }}>
          <Motion>
            <Typography variant='h2'>section3</Typography>
          </Motion>
        </Box>
      </Box>
    </Container>
  )
}
