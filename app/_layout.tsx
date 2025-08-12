import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      {/* <StatusBar hidden={true} /> hide the date and percentage */}
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
