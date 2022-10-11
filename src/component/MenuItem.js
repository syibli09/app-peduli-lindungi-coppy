import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const MenuItem = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ alignItems: "center", flex: 1 }}
    >
      <Image
        style={{
          width: 90,
          height: 90,
          borderRadius: 20,
          marginVertical: 10,
        }}
        source={image}
      />
      <Text style={{ marginTop: 10, textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
