import { Box, CircularProgress } from '@mui/material'

export default function Spinner() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <CircularProgress sx={{ color: (theme) => theme.palette.grey[500] }} />
    </Box>
  )
}
