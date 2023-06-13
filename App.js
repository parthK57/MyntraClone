import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

// SCREENS
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  useEffect(() => {
    // TODO: GET DATA FROM BACKEND
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          ) : (
            <>
              <Text>Has</Text>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
