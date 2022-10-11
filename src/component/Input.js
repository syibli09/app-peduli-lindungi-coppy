import { View, Image, TextInput } from "react-native";
import React from "react";
import { Warna } from "../constant/theme";
// import { Warna } from "../constant/theme";

const Input = ({ placeholder, containerStyle }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Warna.secondary.satu,
        flexDirection: "row",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <Image
        resizeMode="contain"
        style={{ width: 20, height: 19, marginHorizontal: 16 }}
        source={require("../assets/icon/email.png")}
      />
      <TextInput placeholder={placeholder} style={{ height: 60, flex: 1 }} />
    </View>
  );
};

export default Input;
