import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      {/* <StatusBar hidden={true} /> hide the date and percentage */}
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
