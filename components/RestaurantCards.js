import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCards({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white shadow rounded-lg mr-3"
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-60 rounded-lg"
      />
      <View className=" gap-1 px-3 mb-5">
        <Text className=" font-bold text-lg pt-2">{title}</Text>
        <View className=" flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-green-500">{rating}</Text>
          <Text>. {genre}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <EvilIcons name="location" size={22} color="gray" opacity={0.7} />
          <Text className=" text-xs text-gray-500">
            Nearby.{" "}
            {address.length > 12 ? address.slice(0, 12) + "..." : address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
