import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Botao from "../components/Botao";

export default function Detalhes() {
  const router = useRouter();
  const { titulo, genero, ano, imagem, sinopse, favorito } = useLocalSearchParams<{
    titulo: string;
    genero: string;
    ano: string;
    imagem: string;
    sinopse: string;
    favorito: string;
  }>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.info}>Gênero: {genero}</Text>
      <Text style={styles.info}>Ano: {ano}</Text>
      <Text style={styles.info}>
        Status: {favorito === "true" ? "★ Favorito" : "☆ Não favorito"}
      </Text>
      <Text style={styles.sinopse}>{sinopse}</Text>

      <View style={styles.botao}>
        <Botao titulo="Voltar" onPress={() => router.back()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  imagem: {
    width: 220,
    height: 320,
    borderRadius: 12,
    backgroundColor: "#333",
    marginBottom: 16,
  },
  titulo: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  info: {
    color: "#b5b5c3",
    fontSize: 16,
    marginBottom: 4,
  },
  sinopse: {
    color: "#e0e0e8",
    fontSize: 15,
    textAlign: "center",
    marginTop: 14,
    marginBottom: 24,
  },
  botao: {
    alignSelf: "stretch",
  },
});
