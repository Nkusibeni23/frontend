import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { TrashIcon } from "react-native-heroicons/solid";

export default function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsInBasket(groupedItems);
  }, [items]);

  //   const exchangeRate = 1.39;

  // Rwandan francs currency
  //   const exchangeRate = 1226.53;

  //   const basketTotalRWF = basketTotal * exchangeRate;

  //   console.log(groupItemsInBasket);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className=" flex-1 text-center bg-gray-100">
        <View className="p-5 border-b border-gray-300 bg-white shadow">
          <View>
            <Text className="text-lg font-bold text-center">Your Cart</Text>
            <Text className="text-center text-gray-500 font-medium mt-1">
              {restaurant.title}
            </Text>
            <Text className="text-center text-gray-400 mt-2">
              You have {Object.keys(groupItemsInBasket).length} dishes in your
              cart.
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className=" rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={40} width={40} />
          </TouchableOpacity>
        </View>
        {/* Items List */}
        <View className="flex flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "http://links.papareact.com/wru",
            }}
            className="h-7 w-9 bg-gray-300 p-4 rounded-full"
          />
          <Text className=" flex-1"> Deliver in 30-60 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="divide-y divide-gray-300"
        >
          {Object.entries(groupItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-4"
            >
              <Text className="text-[#00CCBB] font-bold">{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className=" text-gray-600">
                <Currency quantity={items[0]?.price} currency="GBP" />
              </Text>
              <TouchableOpacity className="cursor-pointer">
                <Text
                  className=" text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  <TrashIcon color="#00CCBB" height={20} width={20} />
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className=" p-5 bg-white mt-5 space-y-5">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className=" text-gray-400">
              <Currency quantity={basketTotal} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Deliver Fee</Text>
            <Text className=" text-gray-400">
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-700 font-bold">Order Total</Text>
            <Text className=" text-gray-800 font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="GBP" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Preparing")}
            className="rounded-xl bg-[#00CCBB] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
