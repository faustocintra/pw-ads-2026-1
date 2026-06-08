import { useState } from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import logotipo from '../assets/karangos-logo-600px.png'
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import fotoAutor from '../assets/foto.png.jpg';

export default function Homepage() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    const novoLike = likes + 1;
    setLikes(novoLike);
    alert(`Total de likes: ${novoLike}`);
  }

  return (
    <>
      <Typography variant="h1">
        Bem-vindo(a) à loja Karangos!
      </Typography>

      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      component="img"
      image={fotoAutor}
      alt="Foto do autor"
      sx={{ 
      height: 400,
      objectFit: 'cover',
      objectPosition: 'center 10%'
      }}
          />
        <CardContent>
          <Typography variant="h5">
            Nome do Autor
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Estar vivo e viver é diferente de saber quem se é. Eventualmente 
            você está executando papeis sociais. Quem se é está ligado as 
            condutas que guarda no seu intimo. Eu por exemplo procuro aprender 
            com meus erros, tratar as pessoas de uma forma que eu esteja 
            tranquilo com minha consciência. Mas do que funções que eu possa 
            exercer nesse vida.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleLike}>
          Curtir ({likes})
          </Button>
        </CardActions>
      </Card>
    </>
  );
}