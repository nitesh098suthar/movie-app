import { View, Text, Image, TextInput } from "react-native";
import React from "react";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View
      className="bg-dark-200 rounded-full px-5 py-4"
      style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
    >
      <Image
        source={require("@/assets/icons/search.png")}
        tintColor={"#ab8bff"}
        resizeMode="contain"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
