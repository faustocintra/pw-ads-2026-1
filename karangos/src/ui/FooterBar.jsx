import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee'


export default function FooterBar() {
  return <>
    <Box
      component="footer"
      sx={{
        backgroundColor: 'action.disabledBackground',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100vw'
      }}
    >
      <Typography
        variant="caption"
        sx={{
          '& a': {
            color: 'secondary.light'
          }
        }}
      >
        Desenvolvido e mantido com <CoffeeIcon sx={{ verticalAlign: 'text-bottom', fontSize: 'inherit' }} /> por <a href="mailto:umjuan123@gmail.com">Juan Felipe</a>
      </Typography>
    </Box>
  </>
}
