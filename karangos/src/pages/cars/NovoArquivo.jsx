import React from 'react'
import Typography from '@mui/material/Typography'

export default function About() {
  const [info, setInfo] = React.useState('')

  React.useEffect(() => {
    fetch('https://api.faustocintra.com.br/sobre/1')
      .then(response => response.json())
      .then(data => {
        setInfo(data.info)
      })
  }, [])

  return <>
    <Typography variant="h1" component="h1">
      Sobre o Projeto Karangos
    </Typography>

    <Typography>
      {info}
    </Typography>
  </>
}