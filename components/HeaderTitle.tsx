import React from "react";
import { Text, View } from "react-native";

const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <View className='flex justify-center items-center'>
      <Text className='text-white text-4xl font-bold my-10 tracking-wider'>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitle;
