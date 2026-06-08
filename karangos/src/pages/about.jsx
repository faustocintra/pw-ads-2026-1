import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function About() {
  const [likes, setLikes] = useState(0)
  const [liked, setLiked] = useState(false)

  function handleLike() {
    const newLikes = liked ? likes - 1 : likes + 1
    setLikes(newLikes)
    setLiked(!liked)
    alert(`Likes: ${newLikes}`)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image="/foto.jpg"
        alt="Foto do autor"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sobre o autor
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Me chamo Juan Felipe, tenho 21 anos e sou estudante de Análise e Desenvolvimento de Sistemas. Gosto muito de programação, principalmente de JavaScript e React. Este projeto é uma forma de praticar meus conhecimentos e aprender mais sobre desenvolvimento web.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLike}>
          Likes: {likes}
        </Button>
      </CardActions>
    </Card>
    </Box>
  )
}
