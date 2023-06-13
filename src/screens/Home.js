import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// COMPONENTS
import Header from "../components/Home/Header";
import SecoundaryHeader from "../components/Home/SecoundaryHeader";

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="h-screen w-screen">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SecoundaryHeader />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
