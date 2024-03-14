import { View, Text, StatusBar, SafeAreaView, Image } from "react-native"; // Import Image from react-native
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text className=" text-red-500">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          {/* Header */}
          <Image
            source={require("../assets/images/IMG_0615.jpg")}
            className=" h-8 w-8 bg-slate-400 p-6 rounded-full"
          />
          <View>
            <Text className=" font-bold text-gray-400 text-xs">
              Welcome Back!
            </Text>
            <Text className=" font-bold text-xl">Current Location</Text>
          </View>
        </View>
        <StatusBar style="dark-content" />
      </Text>
    </SafeAreaView>
  );
}
