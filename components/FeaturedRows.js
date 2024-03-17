import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

export default function FeaturedRows({ id, title, description }) {
  return (
    <View>
      <View className=" mt-4 flex-row items-center justify-between px-4">
        <Text className=" font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className=" text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className=" pt-4"
      >
        {/* RestaurantCards.... */}
        <RestaurantCards
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Noddles"
          rating={4.7}
          genre="Amarillo"
          address=" 234 Main Street"
          short_description="This is the restaurant you are looking for..."
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Noddles"
          rating={4.7}
          genre="Amarillo"
          address=" 234 Main Street"
          short_description="This is the restaurant you are looking for..."
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Noddles"
          rating={4.7}
          genre="Amarillo"
          address=" 234 Main Street"
          short_description="This is the restaurant you are looking for..."
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Noddles"
          rating={4.7}
          genre="Amarillo"
          address=" 234 Main Street"
          short_description="This is the restaurant you are looking for..."
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
