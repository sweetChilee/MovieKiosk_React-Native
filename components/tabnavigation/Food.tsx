import { StyleSheet, View, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SetScreen from "./foodMenu/Set";
import PopconScreen from "./foodMenu/PopCorn";
import DrinkScreen from "./foodMenu/Drink";
import SnackScreen from "./foodMenu/Snack";
import { SCREEN_FONT } from "../../config/globalstyles";

const Tab = createMaterialTopTabNavigator();

export default function Food() {
  return (
    <>
      <View
        style={{ flex: 0.25, alignItems: "center", justifyContent: "center" }}
      >
        <Image
          source={require("./foodMenu/assets/img/background/back.png")}
          style={{ flex: 1 }}
          resizeMode="cover"
        />
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarPressColor: "white",
          tabBarLabelStyle: { fontSize: SCREEN_FONT, color: "white" },
          tabBarStyle: {
            backgroundColor: "rgb(55, 55, 55)",
            flex: 0.09,
          },
        }}
      >
        <Tab.Screen name="세트" component={SetScreen} />
        <Tab.Screen name="팝콘" component={PopconScreen} />
        <Tab.Screen name="음료" component={DrinkScreen} />
        <Tab.Screen name="간식" component={SnackScreen} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  menutab: {
    paddingHorizontal: 30,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});
