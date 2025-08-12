import icon from "@/assets/images/icon.png";
import React from "react";
import { Image, Text, View } from "react-native";

const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <View className='flex-row justify-center items-center'>
      <Text className='text-white text-4xl font-bold my-10 tracking-wider'>
        {title}
      </Text>
      <Image source={icon} resizeMode='contain' className='size-10' />
    </View>
  );
};

export default HeaderTitle;
