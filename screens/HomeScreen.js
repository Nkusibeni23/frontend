import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import Categories from "../components/categories";
import FeaturedRows from "../components/FeaturedRows";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row pb-3 items-center mx-3 space-x-2">
        {/* Header */}
        <Image
          source={require("../assets/images/IMG_0615.jpg")}
          className="h-8 w-8 bg-slate-400 p-6 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Welcome Back!</Text>
          <Text className="font-bold text-lg space-x-2">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* search */}
      <View className=" flex-row items-center space-x-2 mx-3">
        <View className="flex-row space-x-2 bg-gray-200 p-3 w-[330px] rounded-lg shadow mb-3">
          <Ionicons name="search" size={24} color="#00CCBB" />
          <TextInput
            placeholder=" Restaurants and cuisines..."
            keyboardType="default"
          />
        </View>
        {/* <AdjustmentsIcon color="#00CCBB" /> */}
        <Svg
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#00CCBB"
          className="flex items-center justify-center mb-2 w-9 h-9"
        >
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </Svg>
      </View>
      {/* body */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className=" bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* categories  */}
        <Categories />

        {/* featured rows */}
        <FeaturedRows
          id="12"
          title="Featured"
          description="Paid placements from our partners!"
        />
        <FeaturedRows
          id="12"
          title="Tasty Discount"
          description="Discount plans from our partners!"
        />
        <FeaturedRows
          id="12"
          title="Offer near you!"
          description="why not support your local restaurant today?"
        />
      </ScrollView>
      <StatusBar style="dark-content" />
    </SafeAreaView>
  );
}
