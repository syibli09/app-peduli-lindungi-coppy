import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../component/Header";
import CardItem from "../molecules/CardItem";

const ImmunizationScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header title="Vaccine and Immunization" />
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
          title="COVID-19 Vaccination"
          desc="See your vaccine certificate here"
          image={require("../assets/ic_covid.jpg")}
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
          title="Check-In Verification"
          desc="COVID-19 vaccine certificate verification in EU format"
          image={require("../assets/ic_check_in.jpg")}
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
          title="Child Immunization"
          desc="see your child's Immunization record here"
          image={require("../assets/ic_child.jpg")}
        />
      </View>
    </View>
  );
};

export default ImmunizationScreen;
