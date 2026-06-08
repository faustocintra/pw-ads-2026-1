import { useState } from "react";
//Importa o recurso de estado do React
function Home() {
//Cria o componente

  const [likes, setLikes] = useState(0);
  //Declara a variável "likes" começando em 0
  //"setLikes" é o botão que atualiza esse valor

  return (
    <div>
      <p>Likes: {likes}</p>
      {/*Mostra o valor na tela */}

      <button onClick={() => setLikes(likes + 1)}>Curtir</button>
      {/*Ao clicar, soma +1 no likes */}
    </div>
  );
}

export default Home;
//Exporta para poder usar em outros arquivos