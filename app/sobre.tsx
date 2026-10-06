import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Botao from "../components/Botao";

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>RwzStreaming</Text>
      <View style={styles.containerDesc}>
        <Text style={styles.texto}>Finalidade: apresentar um catálogo de filmes e permitir favoritar títulos.</Text>
        <Text style={styles.texto}>Versão: 1.0.0</Text>
        <Text style={styles.texto}>Disciplina: Programação para Dispositivos Móveis I</Text>
        <Text style={styles.texto}>Fatec Registro</Text>
      </View>
      <View style={styles.botao}>
        <Botao titulo="Voltar ao catálogo" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  containerDesc: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 24,
    backgroundColor: "#14141c",
    borderRadius: 10,
    borderColor: "#2a2a35",
    borderWidth: 1,
  },
  titulo: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  texto: {
    color: "#b5b5c3",
    fontSize: 16,
    marginBottom: 10,
  },
  botao: {
    marginTop: 24,
  },
});
