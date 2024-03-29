import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 15,
        paddingTop: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* categories card */}
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 4"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 5"
      />
    </ScrollView>
  );
}
