import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import vintageCars from '../assets/vintage-cars.png'

export default function About() {
  
  const [info, setInfo] = useState('')

  useEffect(() => {
    fetch('https://api.faustocintra.com.br/sobre/1')
      .then(response => response.json())
      .then(data => {
        setInfo(data.info)
      })
  }, [])

  return (
    <>
      <Typography variant="h1">
        Sobre o Projeto Karangos

      </Typography>

      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          image={vintageCars}
          alt="Carros antigos"
          sx={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sobre o Projeto Karangos
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
        </CardContent>

        <CardActions>
          <DirectionsCarIcon color="primary" />
        </CardActions>
      </Card>
    </>
  )
}