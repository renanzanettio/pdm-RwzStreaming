import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#14141c" },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#0f0f14" },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="catalogo" options={{ title: "Catálogo" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />
      <Stack.Screen name="sobre" options={{ title: "Sobre" }} />
    </Stack>
  );
}
