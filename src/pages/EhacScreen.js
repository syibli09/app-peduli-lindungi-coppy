import { View, Text, Image, Dimensions, StatusBar } from "react-native";
import React from "react";
import Header from "../component/Header";
import CardItem from "../molecules/CardItem";

const { width, height } = Dimensions.get("screen");

const EhacScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        resizeMode="cover"
        style={{ width, height: 250 }}
        source={require("../assets/bg_ehac.jpg")}
      />
      <View style={{ position: "absolute", marginTop: 20 }}>
        <Header title="Ehac" />
      </View>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          backgroundColor: "white",
          marginHorizontal: 20,
          marginVertical: 20,
          borderRadius: 20,
        }}
      >
        <CardItem
          title="Create e-HAC"
          desc="Electronic Health Alert Card"
          image={require("../assets/ic_create_ehc.jpg")}
        />
        <View
          style={{
            width: "75%",
            height: 1,
            backgroundColor: "lightgray",
            alignSelf: "flex-end",
          }}
        />

        <CardItem
          title="My e-Hac"
          desc="Check your history eHAC here"
          image={require("../assets/ic_my_ehc.jpg")}
        />
      </View>
    </View>
  );
};

export default EhacScreen;
