import React, { useState } from 'react'
import Typography from '@mui/material/Typography'

export default function AuthorInfo() {

  const [likes, setLikes] = useState(0)

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Sobre o autor
      </Typography>
    </>
  )
}

import { useState } from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function AuthorCard() {

  const [likes, setLikes] = useState(0)

  function handleLike() {

    const newLikes = likes + 1

    setLikes(newLikes)

    alert(`Número de likes: ${newLikes}`)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        sx={{ height: 300 }}
        image="/workspaces/pw-ads-2026-1/karangos/src/src/assets/foto.jpeg"
        title="Foto do autor"
      />

      <CardContent>

        <Typography gutterBottom variant="h5">
          Sobre o autor
        </Typography>

        <Typography variant="body2">
          Meu nome é Matheus Gondim Martins.
        </Typography>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Likes: {likes}
        </Typography>

      </CardContent>

      <CardActions>
        <Button
          size="small"
          onClick={handleLike}
        >
          Curtir
        </Button>
      </CardActions>

    </Card>
  )
}