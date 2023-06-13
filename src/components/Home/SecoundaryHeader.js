import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const SecoundaryHeader = () => {
  return (
    <View className="mt-4 w-screen flex-row items-center justify-between px-8">
      <TouchableOpacity className="h-12 w-40 flex-row items-center justify-center space-x-2 rounded-3xl bg-gray-900 px-3">
        <Image
          resizeMode="cover"
          className="h-8 w-10 rounded-lg"
          source={require("../../../assets/fashion.jpg")}
        />
        <Text className="text-base font-medium text-white">Fashion</Text>
      </TouchableOpacity>
      <TouchableOpacity className="h-12 w-40 flex-row items-center justify-center space-x-2 rounded-3xl bg-white px-3">
        <Image
          resizeMode="cover"
          className="h-8 w-10 rounded-lg"
          source={require("../../../assets/beauty-products.jpg")}
        />
        <Text className="text-base font-medium">Beauty</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecoundaryHeader;
