import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLOR } from "../../config/globalstyles";

function TotalScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Total</Text>
    </View>
  );
}
function SetScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Set!</Text>
    </View>
  );
}

function PopconScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Popcon!</Text>
    </View>
  );
}

function DrinkScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Drink!</Text>
    </View>
  );
}

function FoodScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Food!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Food() {
  return (
    <>
      <View
        style={{ flex: 0.25, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ color: "black" }}>광고</Text>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLOR,
          tabBarInactiveTintColor: "white",

          tabBarStyle: {
            backgroundColor: "rgb(66, 66, 66)",
            // 그림자 효과 주기
          },
        }}
      >
        <Tab.Screen name="Total" component={TotalScreen} />
        <Tab.Screen name="Set" component={SetScreen} />
        <Tab.Screen name="Popcon" component={PopconScreen} />
        <Tab.Screen name="Drink" component={DrinkScreen} />
        <Tab.Screen name="Food" component={FoodScreen} />
      </Tab.Navigator>
    </>
  );
}
