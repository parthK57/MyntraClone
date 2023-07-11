import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";


// COMPONENTS
import Icon from "react-native-vector-icons/Ionicons";
import { toggleSidebar } from "../../slices/AppMechanics";

const Sidebar = () => {
  const username = useSelector((state) => state.user.value.username);
  const dispatch = useDispatch();
  const options = [
    { title: "Men" },
    { title: "Women" },
    { title: "Kids" },
    { title: "Home & Living" },
    { title: "Beauty" },
  ];
  const options1 = [
    { title: "Account" },
    { title: "Order" },
    { title: "Myntra Studio" },
    { title: "Myntra Mall" },
    { title: "Mytra Insider" },
    { title: "Gift Cards" },
    { title: "Contact Us" },
    { title: "FAQs" },
    { title: "Legal" },
  ];
  const closeSidebar = () => {
    dispatch(toggleSidebar(false));
  };

  return (
    <ScrollView className="absolute left-0 top-0 z-20 h-full w-[65%] flex-col bg-white">
      <TouchableOpacity
        onPress={closeSidebar}
        className="absolute right-3 top-3 z-30"
      >
        <Icon name="close" size={25} color={"#fff"} />
      </TouchableOpacity>
      <View className="h-48 w-full bg-gray-900">
        <View className="h-full w-full flex-col-reverse gap-1 px-3 py-5">
          <TouchableOpacity className="w-full flex-row items-center justify-between">
            <Text className="text-lg font-bold text-white">{username}</Text>
            <Image
              className="h-5 w-5 object-contain"
              source={require("../../../assets/left-caret.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="person-circle" size={75} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full flex-col space-y-3 border-b-[0.5px] border-gray-300 px-3 py-2">
        {options.map((item) => {
          return (
            <TouchableOpacity className="h-12 w-full flex-row items-center justify-between">
              <Text className="text-lg font-bold">{item?.title}</Text>
              <Image
                className="h-5 w-5 object-contain"
                source={require("../../../assets/left-caret-gray.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View className="w-full flex-col space-y-3 border-b-[0.5px] border-gray-300 px-3 py-2">
        {options1.map((item) => {
          return (
            <TouchableOpacity className="h-12 w-full flex-row items-center justify-between">
              <Text className="text-lg text-gray-500">{item?.title}</Text>
              <Image
                className="h-5 w-5 object-contain"
                source={require("../../../assets/left-caret-gray.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Sidebar;
