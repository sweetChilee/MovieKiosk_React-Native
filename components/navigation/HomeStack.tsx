import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackNavigatorParamList } from "./types";
import Main from "../main/Main";
import NavList from "../tabnavigation/NavList";
import MovieDetails from "../list/MovieDetails";
import { View } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import HelpComment from "../help/HelpComment";

// const HomeStacks = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStack =
  createSharedElementStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Main"
          component={Main}
          options={({ navigation }) => ({
            headerShown: false,
            gestureEnabled: true,
            transitionSpec: {
              open: { animation: "timing", config: { duration: 300 } },
              close: { animation: "timing", config: { duration: 300 } },
            },
          })}
        />
        <HomeStack.Screen
          name="Navlist"
          component={NavList}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={({ navigation }) => ({
            headerShown: false,
            presentation: "modal",
            gestureEnabled: true,
            transitionSpec: {
              open: { animation: "timing", config: { duration: 300 } },
              close: { animation: "timing", config: { duration: 300 } },
            },
            cardStyleInterPolator: ({ current: { progress } }: any) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </HomeStack.Navigator>
    </>
  );
};

export default HomeStackNavigator;
