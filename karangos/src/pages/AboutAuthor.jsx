import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Box from '@mui/material/Box'
import fotoAutor from '../assets/foto.jpeg'

export default function AboutAuthor() {
  const [likes, setLikes] = useState(0)

  // Carrega os likes do localStorage quando o componente monta
  useEffect(() => {
    const savedLikes = localStorage.getItem('aboutAuthorLikes')
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10))
    }
  }, [])

  const handleLikeClick = () => {
    const newLikes = likes + 1
    setLikes(newLikes)
    // Salva os likes no localStorage
    localStorage.setItem('aboutAuthorLikes', newLikes)
    alert(`Você curtiu! Total de likes: ${newLikes}`)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      {/* Título */}
      <Typography variant="h4" component="h1" sx={{ mt: 2, mb: 2 }}>
        Sobre o autor
      </Typography>

      {/* Card */}
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Leonardo Lopes dos Santos" />
        <CardMedia
          component="img"
          height="500"
          image={fotoAutor}
          alt="Foto do autor"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Meu nome é Leonardo, tenho 29 anos e estou no 4° semestre de ads
            pela Fatec Franca
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            size="small"
            startIcon={<FavoriteBorderIcon />}
            onClick={handleLikeClick}
          >
            Curtir
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
