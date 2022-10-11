import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { Warna } from "../constant/theme";

const Button = ({ containerStyle, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 60,
        backgroundColor: Warna.secondary.satu,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        ...containerStyle,
      }}
    >
      <Text style={{ color: "white" }}>Login</Text>
    </TouchableOpacity>
  );
};

export default Button;
