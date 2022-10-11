import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../component/Header";
import { Warna } from "../constant/theme";

const CovidTestScreen = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header title="COVID-19 Test Resullt" />
      <View style={{ flex: 1, alignItems: "center", marginTop: 150 }}>
        <Image
          resizeMode="contain"
          style={{ width: 240, height: 240 }}
          source={require("../assets/ic_empty.jpg")}
        />
        <View style={{ paddingHorizontal: 20, width: "90%", marginTop: 50 }}>
          <Text style={{ textAlign: "center", fontSize: 12 }}>
            You do not have a history of COVID-19 test results. Make sure you do
            a COVID-19 tes at a laboratory affiliated with the Ministry of
            Health:{" "}
            <Text style={{ color: Warna.primary.satu }}>PCR test lab</Text> or
            <Text style={{ color: Warna.primary.satu }}> Antigen test lab</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CovidTestScreen;
