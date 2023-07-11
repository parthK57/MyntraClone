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
import CardList from "../components/Home/CardList";

const Home = ({ navigation }) => {
  const sidebarStatus = useSelector(
    (state) => state.appMechanics.value.showSidebar
  );

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="relative h-screen w-screen bg-white">
      <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
        <Header />
        {sidebarStatus && <Sidebar />}
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
        <View className="h-12 w-full px-3">
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="h-16 w-full space-x-5"
          >
            <TouchableOpacity>
              <Image
                className="object-fit h-14 w-80"
                resizeMode="contain"
                source={{
                  uri: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_285,c_limit,fl_progressive/w_285,h_29,q_60,,dpr_2,fl_progressive/assets/images/retaillabs/2023/6/22/c0446707-d9fd-48c6-ac8f-0c3f54d71bbb1687414641362-AU-Bank.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                className="object-fit h-14 w-80"
                resizeMode="contain"
                source={{
                  uri: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_285,c_limit,fl_progressive/w_285,h_29,q_60,,dpr_2,fl_progressive/assets/images/retaillabs/2023/6/22/ac82b898-2e50-4f67-8554-d4323514b40a1687414597569-PNB.png",
                }}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View className="h-20 w-full px-3">
          <TouchableOpacity className="h-full w-full">
            <Image
              className="h-full w-full object-contain"
              resizeMode="contain"
              source={{
                uri: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/2023/6/23/f5c196fa-00aa-4810-a614-c318a89765881687509279103-Prime-Time-Deals-----1.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
        <View className="mt-2 h-64 w-full">
          <TouchableOpacity className="h-full w-full">
            <Image
              source={{
                uri: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/6/28/16692a82-e0e0-4f85-86d4-c519b552794b1687932122158-MST-9-pm--23-----4.jpg",
              }}
              className="h-full w-full object-contain"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View className="mt-2 h-20 w-full">
          <TouchableOpacity className="h-full w-full">
            <Image
              source={{
                uri: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/6/23/9044a20b-e3d7-4fbe-894e-1d6ada22171b1687510848146-Crazy-Deals-----5.jpg",
              }}
              className="h-full w-full object-contain"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View className="mt-3 w-full bg-white">
          <CardList data={APPDATA.cardList1} />
        </View>
        <View className="h-16 w-full">
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/2023/6/23/bf160a4e-95eb-45db-a45c-70d928a2699d1687505263492-It---s-Raining-Discounts-_980x150.png",
              }}
              className="h-full w-full object-contain"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
