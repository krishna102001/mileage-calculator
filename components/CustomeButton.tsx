import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomeButton = ({
  onPress,
  btntxt,
  reset,
}: {
  onPress: () => void;
  btntxt: string;
  reset?: boolean;
}) => {
  return (
    <TouchableOpacity
      className={
        reset
          ? "flex justify-center items-center p-4 w-40 mx-auto bg-red-500 rounded mt-4"
          : "flex justify-center items-center p-4 w-40 mx-auto bg-amber-400 rounded mt-4"
      }
      onPress={onPress}
    >
      <Text className='text-white font-bold tracking-widest text-lg'>
        {btntxt}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomeButton;
