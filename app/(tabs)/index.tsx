import CustomeButton from "@/components/CustomeButton";
import HeaderTitle from "@/components/HeaderTitle";
import InputField from "@/components/InputField";
import TableDetails from "@/components/TableDetails";
import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import { Keyboard, View } from "react-native";
import "../global.css";

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

  const [result, setResult] = useState<resultInterface | undefined>(undefined);

  const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema });

  const handleLogic = async () => {
    const distNum = val.dist !== "" && parseFloat(val.dist);
    const fuelNum = val.fuel !== "" && parseFloat(val.fuel);
    const fuelPriceNum = val.fuelPrice && parseFloat(val.fuelPrice);
    if (distNum && fuelNum && fuelPriceNum) {
      const mileage = distNum / fuelNum;
      const totalFuelCost = (distNum / mileage) * fuelPriceNum;
      const fuelCostPerKm = totalFuelCost / distNum;
      setResult({
        mileage: parseFloat(mileage.toFixed(2)),
        totalFuelCost: parseFloat(totalFuelCost.toFixed(2)),
        fuelCostPerKm: parseFloat(fuelCostPerKm.toFixed(2)),
      });
      await drizzleDb.insert(schema.milehistory).values({
        distance: String(val.dist),
        fuel: String(val.fuel),
        fuelprice: String(val.fuelPrice),
        totalfuelcost: totalFuelCost.toFixed(2),
        fuelcostperkm: fuelCostPerKm.toFixed(2),
        mileage: mileage.toFixed(2),
      });
      Keyboard.dismiss();
    }
    return;
  };

  const handleReset = () => {
    setVal({
      dist: "",
      fuel: "",
      fuelPrice: "",
    });
    setResult(undefined);
  };

  return (
    <>
      <View className='flex-1 justify-start py-10 bg-gray-700'>
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
          <View className='flex-row'>
            <CustomeButton onPress={handleLogic} btntxt='Calculate' />
            <CustomeButton onPress={handleReset} btntxt='Clear' reset={true} />
          </View>
        </View>
        {result !== undefined && (
          <View className='flex justify-center items-center mt-4'>
            <TableDetails
              dist={val.dist}
              fuel={val.fuel}
              mile={result.mileage}
              tfc={result.totalFuelCost}
              fcpk={result.fuelCostPerKm}
            />
          </View>
        )}
      </View>
    </>
  );
}
