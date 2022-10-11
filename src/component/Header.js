import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/icon/arrowLeft.png")}
        />
      </TouchableOpacity>
      <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: "bold" }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
