import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomeButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity
      className=' flex justify-center items-center p-4 w-40 mx-auto bg-amber-400 rounded'
      onPress={onPress}
    >
      <Text className='text-white font-bold tracking-widest text-lg'>
        Calculate
      </Text>
    </TouchableOpacity>
  );
};

export default CustomeButton;
