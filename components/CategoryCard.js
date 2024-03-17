import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CategoryCard({ imgUrl, title }) {
  return (
    <TouchableOpacity className="relative flex mr-2 left-4">
      <View>
        <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded-lg" />
        <Text className=" absolute bottom-1 left-1 text-white font-bold">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
