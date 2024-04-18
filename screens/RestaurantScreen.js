import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import React, { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import { EvilIcons } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
    );
  }),
    [dispatch];

  return (
    <>
      <BasketIcon />

      <ScrollView>
        <View>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className=" w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-5 p-2 bg-gray-200 rounded-full"
          >
            <ArrowLeftIcon color="#00CCBB" size={20} />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className=" px-4 pt-4">
            <Text className="text-3xl font-bold text-black">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className=" flex-row items-center space-x-1">
                <StarIcon fill="#FFC72E" size={20} opacity={0.6} />
                <Text className=" text-xs text-gray-500">
                  <Text className=" text-green-400">{rating}</Text>
                  <Text> . {genre}</Text>
                </Text>
              </View>
              <View className=" flex-row items-center space-x-1">
                <EvilIcons
                  name="location"
                  size={20}
                  color="gray"
                  opacity={0.6}
                />
                <Text className=" text-xs text-gray-500">
                  <Text className=" text-gray-400">
                    Nearby .{" "}
                    {address.length > 16
                      ? address.slice(0, 16) + "..."
                      : address}
                  </Text>
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className=" flex-row items-center space-x-2 p-4 border-y border-gray-400">
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
            <Text className="text-gray-950 pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" size={20} />
          </TouchableOpacity>
        </View>
        <View className=" pb-36">
          <Text className=" px-4 pt-6 mb-3 font-bold text-xl"> Menu </Text>
          {/* dish rows */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
        <StatusBar barStyle="dark-content" />
      </ScrollView>
    </>
  );
}
