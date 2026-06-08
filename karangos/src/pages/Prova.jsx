import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import myPhoto from '../assets/me.jpg'

export default function Prova() {
  const [likes, setLikes] = React.useState(0)

  return <>
    <Typography variant="h1" component="h1" gutterBottom>
      Sobre o autor
    </Typography>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="190"
        image={myPhoto}
        alt="/workspaces/pw-ads-2026-1/karangos/src/assets/turvo.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Samuel Souza
        </Typography>
        <Typography variant="body2" color="text.secondary">
           Olá, sou estudante de Análise e Desenvolvimento de Sistemas na FATEC Franca. Hoje, 8 de junho, é meu aniversário e estou fazendo algumas provas, hahaha, mas tudo bem. Confesso que estou amando o curso.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
          Curtidas: {likes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setLikes((current) => {
          const next = current + 1
          alert(next)
          return next
        })}>
          Curtir
        </Button>
      </CardActions>
    </Card>
  </>
}
