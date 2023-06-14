import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

// COMPONENTS
import Icon from "react-native-vector-icons/AntDesign";

const Header = () => {
  const [hamburger, setHamburger] = useState("menu-fold");
  const toggleHamburger = () => {
    if (hamburger === "menu-fold") setHamburger("menu-unfold");
    else setHamburger("menu-fold");
  };

  return (
    <View className="h-16 w-full flex-row items-center justify-between bg-white px-5 shadow-xl">
      <TouchableOpacity
        className="flex-row items-center space-x-4 tracking-wider"
        onPress={toggleHamburger}
      >
        <Icon name={hamburger} size={26} color={"#000"} />
        <Text className="text-lg font-medium text-gray-600">Myntra</Text>
      </TouchableOpacity>
      <View className="flex-row items-center space-x-6">
        <TouchableOpacity>
          <Icon name="search1" size={25} color={"#000"} />
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
