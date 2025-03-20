import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title={"Home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title={"Profile"} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title={"Saved"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title={"Search"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const TabIcon = ({ focused, title }: any) => {
  const iconMap: any = {
    Home: require("@/assets/icons/home.png"),
    Profile: require("@/assets/icons/person.png"),
    Saved: require("@/assets/icons/save.png"),
    Search: require("@/assets/icons/search.png"),
  };

  const iconSource: any = iconMap[title];

  if (focused) {
    return (
      <>
        <ImageBackground
          source={require("@/assets/images/highlight.png")}
          className="flex-1 justify-center items-center min-h-16 rounded-full min-w-[112px] mt-4 overflow-hidden"
          style={{ flexDirection: "row" }}
        >
          <Image source={iconSource} tintColor={"black"} className="" />
          <Text className="text-secondary text-base font-semibold ml-2">
            {title}
          </Text>
        </ImageBackground>
      </>
    );
  }
  return (
    <>
      <View className="flex-1 justify-center items-center min-h-16 rounded-full min-w-[112px] mt-4 overflow-hidden">
        <Image source={iconSource} tintColor={"#A8B5DB"} className="size-5" />
        {/* <Text className="text-[#A8B5DB]">{title}</Text> */}
      </View>
    </>
  );
};
