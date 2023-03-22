import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

export type HomeStackNavigatorParamList = {
  Main: undefined;
  Navlist: undefined;
  MovieDetails: undefined;
  GenreChoice: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "Navlist",
  "Main"
>;

export type RecommendScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "Navlist",
  "GenreChoice"
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "Navlist"
>;
