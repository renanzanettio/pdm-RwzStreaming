import { View, Text, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Botao from "../components/Botao";
import Logo from "../assets/images/logo-branco.png";

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.nome}>RwzStreaming</Text>
        <Text style={styles.descricao}>
          Bem-vindo ao RwzStreaming! Explore nosso catálogo de filmes e séries.
        </Text>
      </View>
      <View style={styles.botao}>
        <Botao titulo="Acessar catálogo" onPress={() => router.push("/catalogo")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f14",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 24,
    gap: 50,
  },
  logo: {
    width: 100,
    height: 87,
  },
  center: {
    alignItems: "center",
  },
  nome: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descricao: {
    color: "#b5b5c3",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  botao: {
    alignSelf: "stretch",
  },
});
