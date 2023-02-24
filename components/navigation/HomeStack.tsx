import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackNavigatorParamList } from "./types";
import Main from "../main/Main";
import NavList from "../tabnavigation/NavList";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Navlist"
        component={NavList}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
