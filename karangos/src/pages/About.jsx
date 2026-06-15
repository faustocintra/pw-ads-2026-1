import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import foto from '../assets/foto.jpg'

export default function About() {

  /*
    2. Nesse componente, declare uma variável de estado chamada  likes, com valor inicial 0 (zero) .
  */
  const [likes, setLikes] = React.useState(0)

  function handleClick() {
    setLikes(likes + 1) 
    alert("Número de likes: " + likes)
  }

  return <>
    {/*
      3. Dentro do componente, insira título usando um componente 
      Typography com o texto "Sobre o autor" ou "Sobre a autora", 
      conforme o caso.
    */}
    <Typography>
      Sobre o autor
    </Typography>

    {/*
      4. Abaixo   do   título,   coloque   um   componente   do   tipo  Card 
      (https://mui.com/material-ui/react-card) e vá ao exemplo chamado "Media".
    */}
    <Card sx={{ maxWidth: 345 }}>
      {/*
        5. Faça o upload de uma foto sua e, usando os recursos do React, coloque sua foto no lugar da imagem que veio no exemplo do cartão. Ajuste a prop de altura da imagem, se necesário.
      */}
      <CardMedia
        sx={{ height: 500 }}
        image={foto}
        title="foto de Fausto"
      />
      <CardContent>
        {/*
          6. Coloque seu nome no título do cartão.
        */}
        <Typography gutterBottom variant="h5" component="div">
          Fausto Gonçalves Cintra
        </Typography>
        {/* 
          7. No corpo do cartão, escreva um pequeno texto sobre você.
        */}
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Sou professor universitário da Fatec Franca desde 2014 e do Uni-FACEF desde 2022.
        </Typography>
      </CardContent>
      <CardActions>
        {/*
        8. Na seção CardActions, deixe apenas um dos botões. Ao clicar nesse botão:
            a) o valor da variável de estado likes deve ser incrementado. 
            b) Deve ser emitido um alert() informando o número atual de likes.
        */}
        <Button size="small" onClick={handleClick}>Curtir</Button>
        
      </CardActions>
    </Card>
  </>

}