import React from 'react'
import { Box, Button, Typography } from '@mui/material'
const Home = () => {
  return (
    <div> <Box display='flex' flexDirection='column' alignItems='center'>
    <Button href="/books" sx={{marginTop:15}} variant="contained">
      <Typography variant="h3">View all Products</Typography>
    </Button>
  </Box></div>
  )
}

export default Home