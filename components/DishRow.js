import { View, Text, Image, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItems,
  selectBasketItemsWithId,
  removeFromBasket,
} from "../features/basketSlice";

export default function DishRow({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-4">
            <Text className=" text-lg mb-1 font-semibold">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-700 mt-3 font-medium">
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-400 p-4 rounded-lg"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                color={items.length > 0 ? "#00CCBB" : "gray"}
                size={30}
              />
            </TouchableOpacity>
            <Text className="font-semibold">{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
