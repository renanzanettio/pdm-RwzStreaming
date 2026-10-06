import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface FilmeCardProps {
  titulo: string;
  genero: string;
  ano: number;
  imagem: string;
  sinopse: string;
};

export default function FilmeCard({ titulo, genero, ano, imagem, sinopse }: FilmeCardProps) {
  const router = useRouter();
  const [favorito, setFavorito] = useState(false);

  function abrirDetalhes() {
    router.push({
      pathname: "/detalhes",
      params: { titulo, genero, ano: String(ano), imagem, sinopse, favorito: String(favorito) },
    });
  }

  return (
    <Pressable
      onPress={abrirDetalhes}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressionado]}
    >
      <Image source={{ uri: imagem }} style={styles.imagem} />

      <View style={styles.info}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.detalhe}>{genero}</Text>
        <Text style={styles.detalhe}>{ano}</Text>

        <Pressable
          onPress={() => setFavorito(!favorito)}
          style={({ pressed }) => [
            styles.botaoFavorito,
            favorito && styles.botaoFavoritoAtivo,
            pressed && styles.botaoPressionado,
          ]}
        >
          <Text style={styles.textoFavorito}>
            {favorito ? "★ Favorito" : "☆ Favoritar"}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#1c1c26",
    borderRadius: 12,
    padding: 10,
    marginBottom: 14,
  },
  cardPressionado: {
    opacity: 0.8,
  },
  imagem: {
    width: 90,
    height: 130,
    borderRadius: 8,
    backgroundColor: "#333",
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  titulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  detalhe: {
    color: "#b5b5c3",
    fontSize: 14,
  },
  botaoFavorito: {
    alignSelf: "flex-start",
    backgroundColor: "#2a2a35",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  botaoFavoritoAtivo: {
    backgroundColor: "#e5a50a",
  },
  botaoPressionado: {
    opacity: 0.6,
    transform: [{ scale: 0.95 }],
  },
  textoFavorito: {
    color: "#fff",
    fontWeight: "bold",
  },
});
