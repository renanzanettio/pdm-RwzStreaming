import { Pressable, Text, StyleSheet } from "react-native";

interface BotaoProps {
  titulo: string;
  onPress: () => void;
  secundario?: boolean;
};

export default function Botao({ titulo, onPress, secundario = false }: BotaoProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.botao,
        secundario && styles.secundario,
        pressed && styles.botaoPressionado,
      ]}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#e50914",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
  },
  secundario: {
    backgroundColor: "#2a2a35",
  },
  botaoPressionado: {
    opacity: 0.6,
    transform: [{ scale: 0.96 }],
  },
  texto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
