import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// COMPONENTS
import Header from "../components/Home/Header";

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="h-screen w-screen">
      <Header />
      
    </SafeAreaView>
  );
};

export default Home;
