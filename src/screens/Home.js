import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  
  return (
    <SafeAreaView className="w-screen h-screen">
      <Text className="text-red-500">Home</Text>
    </SafeAreaView>
  );
};

export default Home;
