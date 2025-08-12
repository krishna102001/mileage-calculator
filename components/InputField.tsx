import React from "react";
import { Text, TextInput, View } from "react-native";

interface Props {
  title: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const InputField = ({ title, onChangeText, placeholder, value }: Props) => {
  return (
    <View className='flex gap-2 px-10 justify-start items-start'>
      <Text className='text-white text-lg font-semibold uppercase w-full tracking-wider'>
        {title}
      </Text>
      <TextInput
        keyboardType='decimal-pad'
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor='#a8b5db'
        className='border border-l border-white w-full rounded-lg pl-4 text-white'
      />
    </View>
  );
};

export default InputField;
