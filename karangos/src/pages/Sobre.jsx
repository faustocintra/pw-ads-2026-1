import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import vintage from '../assets/vintage-cars.png'

export default function Sobre() {
  const [info, setInfo] = React.useState('')

  React.useEffect(() => {
    async function loadInfo() {
      try {
        const response = await fetch('https://api.faustocintra.com.br/sobre/1')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setInfo(data.info || '')
      } catch (error) {
        console.error('Erro ao carregar informações:', error)
      }
    }

    loadInfo()
  }, [])

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Sobre o Projeto Karangos
      </Typography>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={vintage}
          title="Vintage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sobre o Projeto Karangos
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {info || 'Carregando informações...'}
          </Typography>
        </CardContent>
        <CardActions>
          <img
            src="/favicon-32x32.png"
            alt="Ícone do Karangos"
            style={{ width: 32, height: 32 }}
          />
        </CardActions>
      </Card>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        {info || 'Carregando informações...'}
      </Typography>
    </>
  )
}
