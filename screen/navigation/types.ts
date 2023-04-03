import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

export type HomeStackNavigatorParamList = {
  Main: undefined;
  Navlist: undefined;
  MovieDetails: undefined;
  GenreChoice: undefined;
  LoadingPage: undefined;
  FilteredMovie: undefined;
  Result: undefined;
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

export type LoadingScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "GenreChoice",
  "LoadingPage"
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "Navlist"
>;
