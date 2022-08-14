import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from '../sanity'

const FeaturedRow = ({ title, id, description }) => {
  const [restaurants, setRestaurants] = useState([])

useEffect(() => {
  sanityClient.fetch(`
  *[_type == 'featured' && _id == $id] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
      type-> {
        name
      }
    },
  }[0]

  `, 
  {id}
  ).then(data => {
    setRestaurants(data?.restaurants)
  })
},[])

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* rest cards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareacts.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 street st"
          short_descriptions="this is a desc"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareacts.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 street st"
          short_descriptions="this is a desc"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareacts.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 street st"
          short_descriptions="this is a desc"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
