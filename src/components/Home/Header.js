import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import Icon from "react-native-vector-icons/AntDesign";

// SLICES
import { toggleSidebar } from "../../slices/AppMechanics";

const Header = () => {
  const dispatch = useDispatch();
  const [hamburger, setHamburger] = useState("menu-fold");
  const toggleHamburger = () => {
    if (hamburger === "menu-fold") {
      setHamburger("menu-unfold");
      dispatch(toggleSidebar(true));
    } else {
      setHamburger("menu-fold");
      dispatch(toggleSidebar(false));
    }
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
