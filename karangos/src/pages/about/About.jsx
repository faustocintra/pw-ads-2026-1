import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import wandersonFoto from '../../assets/wanderson.jpeg'

export default function About() {
  const [likes, setLikes] = React.useState(0)

  const handleLike = () => {
    const novoValor = likes + 1
    setLikes(novoValor)
    alert(`Número atual de likes: ${novoValor}`)
  }

  return (
    <>
      <Typography variant="h1" gutterBottom>
      Sobre o autor
      </Typography>

     <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
      >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image={wandersonFoto}
          alt="Foto de Wanderson Honorio"
          sx={{
            width: '100%',
            aspectRatio: '1 / 1',
            objectFit: 'cover'
          }}
        />

        <CardContent>
          <Typography variant="h5" gutterBottom>
            Wanderson Honorio
          </Typography>

          <Typography variant="body1">
            Um profissional de marketing e mídia com 13 anos de experiência, atuando como especialista em e-commerce, tráfego e inteligência de dados
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={handleLike}
          >
            Curtir ({likes})
          </Button>
        </CardActions>
      </Card>
    </Box>
    </>
  )
}