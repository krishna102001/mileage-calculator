import historyIcon from "@/assets/images/history.png";
import homebutton from "@/assets/images/homebutton.png";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
const TabIcon = ({ focused, title, source }: any) => {
  if (focused) {
    return (
      <View className='flex-row w-full flex-1 min-w-[120px] min-h-16 gap-2  mt-4 justify-center items-center bg-slate-500 rounded-full'>
        <Image source={source} resizeMode='cover' className='size-6' />
        <Text className='text-sm capitalize'>{title}</Text>
      </View>
    );
  }
  return (
    <View className='size-full justify-center items-center mt-4'>
      <Image source={source} resizeMode='cover' className='size-6' />
    </View>
  );
};
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          height: 52,
          borderRadius: 50,
          marginHorizontal: 100,
          marginBottom: 30,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} title='home' source={homebutton} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name='history'
        options={{
          title: "history",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} title='history' source={historyIcon} />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
