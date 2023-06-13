import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

// COMPONENTS
import Icon from "react-native-vector-icons/AntDesign";

const Header = () => {
  return (
    <View className="w-full bg-white shadow-xl px-2 flex-row items-center justify-between h-16">
      <TouchableOpacity>
        <Image
          resizeMode="cover"
          className="object-cover w-28 h-full"
          source={require("../../../assets/Insider.png")}
        />
      </TouchableOpacity>
      <View className="flex-row items-center space-x-6">
        <TouchableOpacity>
          <Icon name="search1" size={25} color={"#000"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bells" size={25} color={"#000"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="hearto" size={25} color={"#000"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shoppingcart" size={25} color={"#000"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
