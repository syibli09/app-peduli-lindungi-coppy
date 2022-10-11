import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
import { Warna } from "../constant/theme";
import Menu from "../molecules/Menu";

const { width, height } = Dimensions.get("screen");

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      {/* header / Tab Top Start */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            style={{ width: 22, height: 22 }}
            source={require("../assets/icon/account_circle_24px.png")}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>
            Hi, Sata Lesmana
          </Text>
        </View>
        <View>
          <Image
            style={{ width: 22, height: 22 }}
            source={require("../assets/icon/notifications_none_24px.png")}
          />
        </View>
      </View>
      {/* header / Tab Top finish */}

      {/* Space start */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 25,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: Warna.primary.satu,
            paddingTop: 20,
            overflow: "hidden",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "center",
              paddingLeft: 20,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Entering a Public Space ?
            </Text>
            <Text style={{ color: "white", fontSize: 14 }}>
              Stay alert to stay Safe
            </Text>
          </View>
          <View
            style={{
              width: 71,
              height: 65,
              justifyContent: "flex-end",
              backgroundColor: "red",
            }}
          >
            <Image
              style={{ width: undefined, height: undefined, flex: 1 }}
              source={require("../assets/ic_hand_qr.jpg")}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: "white",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderWidth: 1,
            borderColor: "lightgray",
          }}
        >
          {/* kiri */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                style={{ width: 16, height: 16, marginRight: 10 }}
                source={require("../assets/icon/arrowBottom.png")}
              />
            </View>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              Check-In Preference
            </Text>
          </View>

          {/* kanan */}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Warna.primary.dua,
              paddingHorizontal: 15,
              paddingVertical: 10,
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <View>
              <Image
                resizeMode="contain"
                style={{ width: 22, height: 20, marginRight: 10 }}
                source={require("../assets/icon/checkIn.png")}
              />
            </View>
            <Text style={{ color: Warna.primary.satu }}>Check-In</Text>
          </View>
        </View>
      </View>
      {/* Space finish */}

      {/* Pembatas */}
      <View style={{ width: width, height: 20 }} />

      {/* Menu */}
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "white",
          height: height,
        }}
      >
        <Menu />
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
