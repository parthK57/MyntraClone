import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
// import  Provider  from "react-redux";

// SCREENS
import Home from "./src/screens/Home";
import store from "./src/store";

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
          {/* <Provider store={store}> */}
          {isSignedIn ? (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          )}
          {/* </Provider> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
