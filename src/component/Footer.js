import { View, Text, Image } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View
      style={{
        height: 100,
        marginBottom: 40,
        paddingHorizontal: 20,
      }}
    >
      <Text>Bekerjasama Dengan :</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1.7, marginHorizontal: 5 }}>
          <Image
            resizeMode="contain"
            style={{ width: undefined, height: undefined, flex: 1 }}
            source={require("../assets/logo_kpcpen.png")}
          />
        </View>
        <View style={{ flex: 0.8, marginHorizontal: 5 }}>
          <Image
            resizeMode="contain"
            style={{ width: undefined, height: undefined, flex: 1 }}
            source={require("../assets/logo_kominfo.png")}
          />
        </View>

        <View style={{ flex: 1.5, marginHorizontal: 5 }}>
          <Image
            resizeMode="contain"
            style={{ width: undefined, height: undefined, flex: 1 }}
            source={require("../assets/logo_kemenkes.png")}
          />
        </View>
        <View style={{ flex: 1, height: 80, marginHorizontal: 5 }}>
          <Image
            resizeMode="contain"
            style={{
              width: undefined,
              height: undefined,
              flex: 1,
              padding: 10,
            }}
            source={require("../assets/logo_bumn.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default Footer;
