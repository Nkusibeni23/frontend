import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
// import { XIcon } from "react-native-heroicons/solid";
import { FontAwesome6 } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import * as Animatable from "react-native-animatable";
import MapView, { Marker } from "react-native-maps";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className=" bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className=" flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome6 name="xmark" size={25} color="white" />
          </TouchableOpacity>
          <Text className=" font-light text-white text-lg">Help Order</Text>
        </View>
        <View className="bg-white my-2 rounded-md mx-5 p-6 z-50 shadow-lg">
          <View className="flex-row justify-between">
            <View>
              <Text className=" text-lg text-gray-500">Estimated Arrival</Text>
              <Text className=" text-4xl font-bold">30-60 Minutes</Text>
            </View>
            <Animatable.Image
              source={require("../assets/images/image_processing20220111-6085-x3omkr.gif")}
              animation="slideInLeft"
              direction="alternate"
              duration={4000}
              iterationCount={1}
              easing="ease-out"
              className="h-16 w-10"
            />
          </View>
          <Progress.Bar
            width={250}
            animated={true}
            indeterminate={true}
            color="#00CCBB"
            className="mt-2"
          />
          <Text className=" mt-3 text-gray-500">
            Your Order at {restaurant.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="red"
        />
      </MapView>
      <SafeAreaView className=" bg-[#00CCBB] flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "http://links.papareact.com/wru",
          }}
          className=" h-12 w-12 bg-white rounded-full ml-5"
        />
        <View className=" flex-1">
          <Text className="text-base font-bold">Benny Chrispin</Text>
          <Text className=" text-white text-base">Your Rider</Text>
        </View>
        <Text className=" text-white text-lg mr-5 font-extrabold">Call</Text>
      </SafeAreaView>
    </View>
  );
}
