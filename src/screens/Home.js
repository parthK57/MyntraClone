import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// COMPONENTS
import Header from "../components/Home/Header";

// FAKE DATA
import APPDATA from "../../APPDATA";
import Categories from "../components/Home/Categories";

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="h-screen w-screen">
      <Header />
      {/* // TODO: ADD EVERYTHING AS FLATLIST COMPONENT FROM BELOW */}
      <View className="bg-white py-2">
        <Categories data={APPDATA?.categories} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
