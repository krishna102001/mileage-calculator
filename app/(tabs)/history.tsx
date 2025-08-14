import arrowdown from "@/assets/images/arrow.png";
import arrowup from "@/assets/images/arrowup.png";
import historyicon from "@/assets/images/historyicon.png";
import * as schema from "@/db/schema";
import { useIsFocused } from "@react-navigation/native";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
interface result {
  id: number;
  distance: string;
  fuel: string;
  fuelprice: string;
  totalfuelcost: string;
  fuelcostperkm: string;
  mileage: string;
}

const History = () => {
  const [data, setData] = useState<result[] | undefined>();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isFocused = useIsFocused();

  const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema });

  useEffect(() => {
    if (isFocused) {
      const fn = async () => {
        const result = await drizzleDb.select().from(schema.milehistory);
        setData(result);
        console.log(result);
      };
      fn();
    }
  }, [isFocused]);

  return (
    <ScrollView
      className='flex-1 px-5 bg-gray-700 py-10'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ minHeight: "100%" }}
    >
      <View className='flex-row gap-2 justify-center items-center'>
        <Text className='text-4xl font-extrabold text-white tracking-wider'>
          History
        </Text>
        <Image source={historyicon} className='size-10' resizeMode='cover' />
      </View>
      {data &&
        data.map((item, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <TouchableOpacity
              className='flex-col justify-center items-start'
              key={item.id}
              onPress={
                () => setExpandedIndex(isExpanded ? null : idx) // toggle only this one
              }
            >
              <View className='flex-row flex-1 justify-between items-center mx-6 mt-10 gap-10'>
                <Text className='text-white font-semibold text-lg'>
                  {idx + 1}. Distance: {item.distance}
                </Text>
                {isExpanded ? (
                  <Image
                    source={arrowup}
                    resizeMode='cover'
                    className='size-6'
                    tintColor='red'
                  />
                ) : (
                  <Image
                    source={arrowdown}
                    resizeMode='cover'
                    className='size-6'
                    tintColor='red'
                  />
                )}
              </View>

              {isExpanded && (
                <View className='ml-12 mt-2'>
                  <Text className='text-white text-base'>
                    Fuel: {item.fuel} Liters
                  </Text>
                  <Text className='text-white text-base'>
                    Total Fuel Cost: {item.totalfuelcost} Rs
                  </Text>
                  <Text className='text-white text-base'>
                    Fuel Cost Per Kilometer: Rs {item.fuelcostperkm} /km
                  </Text>
                  <Text className='text-white text-base'>
                    Mileage: {item.mileage} km/L
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};

export default History;
