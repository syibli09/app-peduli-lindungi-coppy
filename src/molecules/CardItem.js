import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";

const CardItem = ({ image, title, desc, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert("Info", "Module Dalam Pengembangan")}
      style={{
        flexDirection: "row",
        marginHorizontal: 20,
        backgroundColor: "white",
        paddingVertical: 20,
        paddingHorizontal: 15,
      }}
    >
      <Image
        style={{ width: 60, height: 60, borderRadius: 10 }}
        source={image}
      />
      <View
        style={{
          marginLeft: 10,
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
        <Text style={{ color: "gray" }}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
