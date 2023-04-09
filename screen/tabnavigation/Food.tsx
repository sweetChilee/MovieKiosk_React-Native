import { StyleSheet, View, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SetScreen from "./foodMenu/Set";
import PopconScreen from "./foodMenu/PopCorn";
import DrinkScreen from "./foodMenu/Drink";
import SnackScreen from "./foodMenu/Snack";
import { COLOR, SCREEN_HEIGHT } from "../../config/globalstyles";

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
          tabBarLabelStyle: {
            fontSize: SCREEN_HEIGHT / 45,
            fontWeight: "700",
          },
          tabBarStyle: {
            flex: 0.07,
            backgroundColor: "rgb(66, 66, 66)",
          },
          tabBarContentContainerStyle: {
            borderBottomWidth: 10,
            borderBottomColor: "rgb(66, 66, 66)",
          },
        }}
      >
        <Tab.Screen
          name="세트"
          component={SetScreen}
          options={{
            tabBarActiveTintColor: COLOR,
            tabBarInactiveTintColor: "white",
          }}
        />
        <Tab.Screen
          name="팝콘"
          component={PopconScreen}
          options={{
            tabBarActiveTintColor: COLOR,
            tabBarInactiveTintColor: "white",
          }}
        />
        <Tab.Screen
          name="음료"
          component={DrinkScreen}
          options={{
            tabBarActiveTintColor: COLOR,
            tabBarInactiveTintColor: "white",
          }}
        />
        <Tab.Screen
          name="간식"
          component={SnackScreen}
          options={{
            tabBarActiveTintColor: COLOR,
            tabBarInactiveTintColor: "white",
          }}
        />
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
