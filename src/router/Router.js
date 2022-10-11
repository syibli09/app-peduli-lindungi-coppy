import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/LoginScreen";
import DashboardScreen from "../pages/DashboardScreen";
import CovidTestScreen from "../pages/CovidTestScreen";
import EhacScreen from "../pages/EhacScreen";
import ImmunizationScreen from "../pages/ImmunizationScreen";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="CovidTest" component={CovidTestScreen} />
        <Stack.Screen name="Ehac" component={EhacScreen} />
        <Stack.Screen name="Immunization" component={ImmunizationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
