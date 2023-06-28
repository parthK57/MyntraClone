import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// COMPONENTS
import Header from "../components/Home/Header";

// FAKE DATA
import APPDATA from "../../APPDATA";
import Categories from "../components/Home/Categories";
import Sidebar from "../components/Home/Sidebar";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const sidebarStatus = useSelector(
    (state) => state.appMechanics.value.showSidebar
  );

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="relative h-screen w-screen">
      <Header />
      {/* // TODO: ADD EVERYTHING AS FLATLIST COMPONENT FROM BELOW */}
      <View className="bg-white py-2">
        <Categories data={APPDATA?.categories} />
      </View>
      {/* {sidebarStatus && <Sidebar />} */}
      <View className="w-full bg-white px-3">
        <TouchableOpacity className="h-36 w-full">
          <Image
            className="h-full w-full object-contain"
            resizeMode="contain"
            source={{
              uri: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/6/22/c64f6ef8-5075-4077-a654-ca5673ddaeb41687416755715-Sign-up-card-720x240-----2.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <View className="h-[72px] w-full bg-white px-3">
        <TouchableOpacity className="h-full w-full flex-col items-center justify-center space-y-1 rounded-md bg-fuchsia-700">
          <Text className="text-base font-extrabold text-white">
            SIGN UP TO GET AMAZING OFFERS
          </Text>
          <Text className="text-sm font-normal text-white">
            FREE SHIPPING FOR YOU
          </Text>
        </TouchableOpacity>
      </View>
      <View className="h-64 w-full flex-row items-center justify-around py-4">
        <TouchableOpacity className="h-full w-[50%]">
          <Image
            source={{
              uri: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/6/23/c201421c-3e48-42b0-aee5-02ad65809eab1687459764139-Split-banner_01.gif",
            }}
            className="h-full w-full object-contain"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity className="h-full w-[50%]">
          <Image
            source={{
              uri: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/6/23/299472e9-4a53-4444-8472-c76df20bef561687459735390-Split-banner_02.gif",
            }}
            className="h-full w-full object-contain"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
