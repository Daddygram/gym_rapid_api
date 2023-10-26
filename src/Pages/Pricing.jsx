import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Prices from '../Components/Pricing/Prices'

const Pricing = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

  return (
    <Box sx={{ pt: { lg: '200px', xs: '60px' } }}>
      <Prices />
    </Box>
  )
}

export default Pricing