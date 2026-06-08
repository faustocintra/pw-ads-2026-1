import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export default function AboutAuthor() {

  // Instrução 1
  const [likes, setLikes] = useState(0)

  // Instrução 2
  const titulo = 'Andresa de Paula'

  return (
    <>

      <Typography
        variant="h4"
        gutterBottom
      >
        {titulo}
      </Typography>

      <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="220"
          image="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
          alt="Imagem da autora"
        />

        <CardContent>

          <Typography
            gutterBottom
            variant="h5"
          >
            
          </Typography>

          <Typography variant="body2">
            Sou estudante do curso de Análise e Desenvolvimento de Sistemas. 
            Tudo tem sido bem desafiador, mas tenho me esforçado para conseguir concluir o curso.
          </Typography>

          <Typography variant="body2">
            Likes: {likes}
          </Typography>

        </CardContent>

      </Card>

    </>
  )
}