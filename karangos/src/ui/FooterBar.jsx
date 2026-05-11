import Typography from '@mui/material/Typography'
import React from 'react'
import Box from '@mui/material/Box'
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function FooterBar() {
return <>
  <Box
    component="footer"
    sx={{
      backgroundColor: 'action.disabledBackground',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',  // posição fixa
      bottom: 0,          // na parte de baixo da página
      width: '100vw'
    }}
    >
      <Typography 
      variant="caption" 
      sx={{
         '& a': {  // Altera a cor do link (a) dentro do Typography (&)
           color: 'secondary.main'
         }
       }}
>
      Desenvolvido e mantido com <CoffeeIcon sx={{ verticalAlign: 'text-bottom', fontSize: 'inherit' }} /> por <a href="mailto:seu e-mail">Matheus</a>
     </Typography>
    </Box>
  </>
}

