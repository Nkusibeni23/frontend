import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

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
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-60 rounded-lg"
      />
      <View>
        <Text className=" font-bold text-lg pt-2">{title}</Text>
        <View className=" flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
