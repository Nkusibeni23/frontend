import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

export default function Categories() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
   *[_type == "category" ]
   `
      )
      .then((data) => {
        setCategory(data);
      });
  }, []);
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
      {category.map((item) => (
        <CategoryCard
          key={item._id}
          imgUrl={urlFor(item.image).width(200).url()}
          title={item.name}
        />
      ))}

      {/* <CategoryCard
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
      /> */}
    </ScrollView>
  );
}
