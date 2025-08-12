import React from "react";
import { Text, View } from "react-native";

interface tabelInterface {
  dist: string;
  fuel: string;
  mile: number;
  tfc: number;
  fcpk: number;
}

const TableDetails = ({ dist, fuel, mile, tfc, fcpk }: tabelInterface) => {
  return (
    <View className='flex-col max-w-md bg-white overflow-hidden'>
      {/* table header */}
      <View className='flex-row justify-start  bg-amber-500 items-center'>
        <View className='w-1/2 flex justify-center items-center border  border-gray-700 p-1'>
          <Text className='font-semibold text-lg tracking-wider'>Units</Text>
        </View>
        <View className='w-1/2 flex justify-center items-center border  border-gray-700 p-1'>
          <Text className='font-semibold text-lg tracking-wider'>Outputs</Text>
        </View>
      </View>
      {/* table data  */}
      {/* Row 1 */}
      <View className='flex-row justify-start  items-center'>
        <View className='w-1/2 flex justify-center items-center border  border-gray-700 p-1'>
          <Text className='capitalize'>distance</Text>
        </View>
        <View className='w-1/2 flex justify-center items-center border  border-gray-700 p-1'>
          <Text>{dist} km</Text>
        </View>
      </View>
      {/* Row 2 */}
      <View className='flex-row justify-start  items-center'>
        <View className='w-1/2 flex justify-center items-center border  border-gray-700 p-1'>
          <Text className='capitalize'>fuel</Text>
        </View>
        <View className='w-1/2 flex justify-center items-center border  border-gray-700 p-1'>
          <Text>{fuel} Liters</Text>
        </View>
      </View>
      {/* Row 3 */}
      <View className='flex-row justify-start  items-center'>
        <View className='w-1/2 flex justify-center items-center border  border-gray-700 p-1'>
          <Text className='capitalize'>total fuel cost</Text>
        </View>
        <View className='w-1/2 flex justify-center items-center border  border-gray-700 p-1'>
          <Text>{tfc} INR</Text>
        </View>
      </View>
      {/* Row 4 */}
      <View className='flex-row justify-start  items-center'>
        <View className='w-1/2 flex justify-center items-center border  border-gray-700 p-1'>
          <Text className='capitalize'>Fuel Cost Per Kilometer</Text>
        </View>
        <View className='w-1/2 flex justify-center items-center border  border-gray-700 p-1'>
          <Text>Rs {fcpk} /km </Text>
        </View>
      </View>
      <View className='flex justify-center items-center border border-gray-700 p-2 bg-yellow-600'>
        <Text className='text-gray-200 font-bold text-xl'>
          Mileage: {mile} km/L
        </Text>
      </View>
    </View>
  );
};

export default TableDetails;
