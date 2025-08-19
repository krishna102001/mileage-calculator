import migrations from "@/drizzle/migrations";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { Stack } from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export const DATABASE_NAME = "milehistory";

function Database_Initializer() {
  const db = drizzle(useSQLiteContext());
  const { success, error } = useMigrations(db, migrations);

  useEffect(() => {
    if (error) {
      console.error("Migration error:", error);
    }
    if (success) {
      console.log("Migrations completed successfully");
    }
  }, [success, error]);

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
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
        <Database_Initializer />
      </SQLiteProvider>
    </>
  );
}
