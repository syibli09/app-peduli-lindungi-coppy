import { View, Text, Image, Alert } from "react-native";
import React from "react";
import MenuItem from "../component/MenuItem";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();

  const handleOnPress = (key) => {
    console.log("key", key);
    switch (key) {
      case "Vaccine And Immunization":
        navigation.navigate("Immunization");
        break;
      case "Covid-19 Test Result":
        navigation.navigate("CovidTest");
        break;
      case "EHAC":
        navigation.navigate("Ehac");
        break;

      default:
        Alert.alert("Info", "Module Dalam Pengembangan");
        break;
    }
  };
  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <MenuItem
          title="Vaccine And Immunization"
          image={require("../assets/ic_vaccine_and_immuniazation.jpg")}
          onPress={() => handleOnPress("Vaccine And Immunization")}
        />
        <MenuItem
          title="Covid-19 Test Result"
          image={require("../assets/ic_covid_test_result.jpg")}
          onPress={() => handleOnPress("Covid-19 Test Result")}
        />
        <MenuItem
          title="EHAC"
          image={require("../assets/ic_ehac.jpg")}
          onPress={() => handleOnPress("EHAC")}
        />
      </View>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <MenuItem
          title="Travel Regulations"
          image={require("../assets/ic_travel_regulation.jpg")}
          onPress={() => handleOnPress("Travel Regulations")}
        />
        <MenuItem
          title="Telemedicine"
          image={require("../assets/ic_telemedicine.jpg")}
          onPress={() => handleOnPress("Telemedicine")}
        />
        <MenuItem
          title="Healthcare Facility"
          image={require("../assets/ic_healthcare_facility.jpg")}
          onPress={() => handleOnPress("Healthcare Facility")}
        />
      </View>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <MenuItem
          title={"Covid-19\nStatistic"}
          image={require("../assets/ic_statistic_covid.jpg")}
          onPress={() => handleOnPress("Covid-19 Statistic")}
        />
        <MenuItem
          title={"Find Hospital\nBed"}
          image={require("../assets/ic_find_hospital.jpg")}
          onPress={() => handleOnPress("Find Hospital Bed")}
        />
        <MenuItem title="" />
      </View>
    </View>
  );
};

export default Menu;
