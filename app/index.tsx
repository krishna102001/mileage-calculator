import CustomeButton from "@/components/CustomeButton";
import HeaderTitle from "@/components/HeaderTitle";
import InputField from "@/components/InputField";
import { useState } from "react";
import { View } from "react-native";
import "./global.css";

interface resultInterface {
  mileage: number;
  totalFuelCost: number;
  fuelCostPerKm: number;
}

export default function Index() {
  const [val, setVal] = useState({
    dist: "",
    fuel: "",
    fuelPrice: "",
  });

  const [result, setResult] = useState<resultInterface | undefined>();

  const handleLogic = () => {
    const distNum = parseFloat(val.dist);
    const fuelNum = parseFloat(val.fuel);
    const fuelPriceNum = parseFloat(val.fuelPrice);
    const mileage = distNum / fuelNum;
    const totalFuelCost = (distNum / mileage) * fuelPriceNum;
    const fuelCostPerKm = totalFuelCost / distNum;
    setResult({
      mileage: parseFloat(mileage.toPrecision(2)),
      totalFuelCost: parseFloat(totalFuelCost.toPrecision(2)),
      fuelCostPerKm: parseFloat(fuelCostPerKm.toPrecision(2)),
    });
  };

  return (
    <>
      <View className='flex-1 justify-start py-10 bg-black'>
        <HeaderTitle title='Mileage Calculator' />
        <View className='flex-col my-2 gap-4'>
          <InputField
            title='distance'
            placeholder='Total Distance'
            value={val.dist}
            onChangeText={(text: string) => setVal({ ...val, dist: text })}
          />
          <InputField
            title='Fuel'
            placeholder='Total Fuel'
            value={val.fuel}
            onChangeText={(text: string) => setVal({ ...val, fuel: text })}
          />
          <InputField
            title='Fuel Price'
            placeholder='Fuel Price'
            value={val.fuelPrice}
            onChangeText={(text: string) => setVal({ ...val, fuelPrice: text })}
          />
          <CustomeButton onPress={handleLogic} />
        </View>
      </View>
    </>
  );
}
