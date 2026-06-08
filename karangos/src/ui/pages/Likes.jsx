import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

export default function Likes() {
  const [likes, setLikes] = useState(0)

  const handleLikeClick = () => {
    const newLikes = likes + 1
    setLikes(newLikes)
    alert(`Você curtiu! Total de likes: ${newLikes}`)
  }

  return (
    <>
      <Typography variant="h1">
        Sobre a autora!
      </Typography>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="/images/author.jpg" 
          title="Rafaela Lissa Maciel da Silva"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rafaela Lissa Maciel da Silva
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Conheça um pouco sobre mim, tenho 20 anos,estudo ADS, bom gosto muito
            de tecnologia, por conta que queria saber como funcionava os apps, sites,etc,
            e também por conta do Homem de Ferro. Além disso gosto de outras, teho varios hobbys,
            como desenhar, ler,assistir filme e séries, amo editar videos, cantar, dançar, maquiagem.
            Meu filme favorito é como treinar seu dragão, ultimamente estou querendo aprender a fazer
            jogo, tenho até uma ideia de um jogo em mente, por isso estou procurando cursos para me ajudar.
            Espero que tenha gostado de me conhecer.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleLikeClick}>
             Curtir ({likes})
          </Button>
        </CardActions>
      </Card>
    </>
  )
}