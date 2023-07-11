import { FlatList } from "react-native";
import React from "react";

// COMPONENTS
import CategoryItems from "./CategoryItems";

const Categories = ({ data }) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => <CategoryItems data={item} />}
      keyExtractor={data?.id}
      horizontal={true}
    />
  );
};

export default Categories;
