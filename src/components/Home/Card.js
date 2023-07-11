import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const Card = ({ data }) => {
  return (
    <View className="ml-2 mr-2 h-72 w-56">
      <TouchableOpacity className="h-full w-full">
        <Image
          source={{ uri: data?.image_url }}
          className="h-full w-full object-contain"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
