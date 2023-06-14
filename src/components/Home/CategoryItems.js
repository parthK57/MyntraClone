import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryItems = ({ data }) => {
  return (
    <TouchableOpacity className="ml-1 mr-1 h-full w-[78px] flex-col items-center space-y-1">
      <Image
        source={{ uri: data?.image_url }}
        className="h-16 w-16 overflow-hidden rounded-full object-cover"
        resizeMode="cover"
      />
      <Text>{data?.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItems;
