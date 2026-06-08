import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import autorFoto from '../assets/autor-foto.png';

function NovoArquivo() {
  const [likes, setLikes] = useState(0);

  return (
    <main>
      <Typography variant="h4" component="h1" gutterBottom>
        Sore o autor
      </Typography>

      <Card sx={{ maxWidth: 345, mb: 4 }}>
        <CardMedia
          component="img"
          height="180"
          image={autorFoto}
          alt="Foto do autor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sobre o autor: Silvio Peroni
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sou o  Silvio, professor aposentado e agora tentando fazer novo curso de 
            ADS, porque é bem dificil sobreviver apenas com aposentadoria.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              const nextLikes = likes + 1;
              setLikes(nextLikes);
              alert(`Likes: ${nextLikes}`);
            }}
          >
            Curtir
          </Button>
        </CardActions>
      </Card>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Nota: este componente vai mostrar como  usar estado com React, um card do Material UI e
        quando tiver clique  atualiza e mostrar o número de likes.
      </Typography>

      <p>Este é um novo componente criado em <code>src/pages/NovoArquivo.jsx</code>.</p>
    </main>
  );
}

export default NovoArquivo;
