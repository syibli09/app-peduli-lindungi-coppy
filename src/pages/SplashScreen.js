import { View, Image, Text, Dimensions, StatusBar } from "react-native";
import React from "react";
import Footer from "../component/Footer";

const { width, height } = Dimensions.get("screen");

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        width: width,
      }}
    >
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      {/* logo */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: 283, height: 67 }}
          source={require("../assets/logoP.png")}
        />
      </View>
      {/* icon / lambang */}
      <Footer />
    </View>
  );
};

export default SplashScreen;
