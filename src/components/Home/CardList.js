import React from "react";
import { FlatList } from "react-native";

// COMPONENTS
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Card data={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={data?.id}
    />
  );
};

export default CardList;
