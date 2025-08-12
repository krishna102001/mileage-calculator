import CustomeButton from "@/components/CustomeButton";
import HeaderTitle from "@/components/HeaderTitle";
import InputField from "@/components/InputField";
import { View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <>
      <View className='flex-1 justify-start py-10 bg-black'>
        <HeaderTitle title='Mileage Calculator' />
        <View className='flex-col my-2 gap-4'>
          <InputField title='distance' placeholder='Total Distance' />
          <InputField title='Fuel' placeholder='Total Fuel' />
          <InputField title='Fuel Price' placeholder='Fuel Price' />
          <CustomeButton />
        </View>
      </View>
    </>
  );
}
