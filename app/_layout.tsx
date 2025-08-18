import migrations from "@/drizzle/migrations";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { Stack } from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { StatusBar } from "react-native";

export const DATABASE_NAME = "milehistory";

export default function RootLayout() {
  const db = drizzle(useSQLiteContext());
  const { success, error } = useMigrations(db, migrations);
  return (
    <>
      {/* <StatusBar hidden={true} /> hide the date and percentage */}
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
      >
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
      </SQLiteProvider>
    </>
  );
}
