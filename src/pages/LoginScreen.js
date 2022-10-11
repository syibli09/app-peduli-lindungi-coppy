import {
  View,
  Text,
  Dimensions,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Footer from "../component/Footer";
import Input from "../component/Input";
import Button from "../component/Button";

const { width } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={{ flex: 1, width, width }}>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
        <Image
          resizeMode="contain"
          style={{ width: 125, height: 140 }}
          source={require("../assets/logo-top.png")}
        />

        <View
          style={{ paddingHorizontal: 20, width: "100%", alignItems: "center" }}
        >
          <Input placeholder="Email" containerStyle={{ marginTop: 20 }} />
          <Input placeholder="Password" containerStyle={{ marginTop: 20 }} />
          <Button containerStyle={{ marginTop: 20 }} onPress={handleLogin} />
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default LoginScreen;
