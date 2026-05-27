import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee'

export default function FooterBar() {
  return (
    <>
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
              color: 'secondary.main'
            }
          }}
        >
          Desenvolvido e mantido com{' '}
          <CoffeeIcon sx={{ verticalAlign: 'text-bottom', fontSize: 'inherit' }} /> por{' '}
          <a href="mailto:silviocezar@gmail.com">Silvio Peroni</a>
        </Typography>
      </Box>
    </>
  )
}
