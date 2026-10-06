import { useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import FilmeCard from "../components/FilmeCard";
import Botao from "../components/Botao";

const filmes = [
  {
    titulo: "Pecadores",
    genero: "Thriller",
    ano: 2025,
    imagem: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Dois irmãos gêmeos tentam deixar suas vidas problemáticas para trás e retornam à cidade natal para recomeçar. Lá, eles descobrem que um mal ainda maior está à espreita para recebê-los de volta.",
  },
  {
    titulo: "Whiplash",
    genero: "Drama",
    ano: 2015,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NWNI9ZmKwCVXJA2meHhRAQ7p2Uox4Co8pOlr4NDcgA&s",
    sinopse: "Um jovem baterista ambicioso entra em um conservatório de música e enfrenta um professor rigoroso que o desafia a alcançar a perfeição, levando-o ao limite físico e emocional.",
  },
  {
    titulo: "Ilha do Medo",
    genero: "Suspense",
    ano: 2010,
    imagem: "https://www.papodecinema.com.br/wp-content/uploads/2012/04/20180529-download.webp",
    sinopse: "Um detetive investiga o desaparecimento de uma paciente em um hospital psiquiátrico localizado em uma ilha remota, mas descobre segredos perturbadores que desafiam sua sanidade.",
  },
  {
    titulo: "Ray",
    genero: "Cinebiografia",
    ano: 2004,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjBK2UXsNxkfVEltARy-R0luR7cypsqzBm813UZ9fTA&s=10",
    sinopse: "A turbulenta história do gênio musical Ray Charles, deficiente visual desde a infância. A audácia e o talento incomparável do músico o transformou em um fenômeno nas turnês e nos estúdios, mas drogas, mulheres e lembranças ruins afetaram muito a sua vida pessoal.",
  },
  {
    titulo: "Um Espião e Meio",
    genero: "Comédia",
    ano: 2016,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiua-RpcWA1qdNRZBOQ-FIRNUE_fa8B-p4-wwZ0nADYg&s=10",
    sinopse: "Antes de se tornar um agente da CIA, Bob sofria bullying na época do colégio. Na agência, ele precisa resolver um caso ultrassecreto e recorre a um antigo colega, popular nos tempos da escola, hoje contador.",
  },
  {
    titulo: "Cyberpunk: Edgerunners",
    genero: "Anime",
    ano: 2022,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7LIV1nNGd9ATNLi97gwXHFzDZDg7fGvWX1ESFd64hQ&s",
    sinopse: "Em um futuro distópico, um jovem marginalizado se junta a um grupo de mercenários conhecidos como Edgerunners, enfrentando perigos e desafios em uma cidade dominada pela tecnologia e pelo crime.",
  },
];

export default function Catalogo() {
  const router = useRouter();

  
  useEffect(() => {
    console.log("Catálogo carregado");
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filmes.map((filme) => (
        <FilmeCard
          key={filme.titulo}
          titulo={filme.titulo}
          genero={filme.genero}
          ano={filme.ano}
          imagem={filme.imagem}
          sinopse={filme.sinopse}
        />
      ))}

      <View style={styles.rodape}>
        <Botao titulo="Sobre o app" secundario onPress={() => router.push("/sobre")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  rodape: {
    marginTop: 6,
    marginBottom: 20,
  },
});
