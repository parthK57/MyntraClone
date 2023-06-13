import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// COMPONENTS
import Header from "../components/Home/Header";

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="w-screen h-screen">
      <Header />
    </SafeAreaView>
  );
};

export default Home;
