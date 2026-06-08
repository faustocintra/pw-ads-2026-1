
import React, { use, useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const carsPromise = fetch('https://api.faustocintra.com.br/v2/about-dev')
 .then(res => res.json())

export default function AboutDevCard() {
  const [likes, setLikes] = useState(0);
  return (
    <Card sx={{ width: 300, maxHeight: 550, margin: '20px auto' }}>
      <CardMedia
        sx={{ height: 270 }}
        image="/src/assets/github_icon_heitor.jpeg"
        title="icone github do heitortasso"
      />
      <CardContent  sx={{ paddingBottom: '0px' }}>
        <Typography gutterBottom variant="h5" component="div">
          Heitor Tasso
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '13px', color: 'text.secondary' }}>
          Sou apaixonado por inovação, arquitetura de software e automação de processos. Com formação técnica em Eletrônica e Eletrotécnica e graduando em Análise e Desenvolvimento de Sistemas (FATEC), uno o conhecimento de hardware e software para criar sistemas eficientes, escaláveis e seguros.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'right', paddingLeft: '16px', paddingRight: '30px', paddingTop: '0px' }}>
        <Button className="like-button" sx={{ fontSize: '25px' }} onClick={() => {setLikes(likes + 1); alert('Obrigado pelo like! Atual: ' + (likes + 1))}}>
          {likes} ♡
        </Button>
      </CardActions>
    </Card>
  );
}
