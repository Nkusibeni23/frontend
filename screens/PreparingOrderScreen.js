import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

export default function PreparingOrderScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/images/23741-home-delivery-man.gif")}
        animation="bounceIn"
        duration={5000}
        iterationCount={4}
        easing="ease-out"
        className=" h-96 w-96"
      />
      <Animatable.Text
        animation="bounceIn"
        iterationCount={2}
        duration={5000}
        className="my-10 text-gray-500 font-bold text-center text-base"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="black" />
    </SafeAreaView>
  );
}
