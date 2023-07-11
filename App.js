import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

// SCREENS
import Home from "./src/screens/Home";
import store from "./src/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  useEffect(() => {
    // TODO: GET DATA FROM BACKEND
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            {isSignedIn ? (
              <>
                <Stack.Screen name="Home" component={Home} />
              </>
            ) : (
              <>
                <Stack.Screen name="Home" component={Home} />
              </>
            )}
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
