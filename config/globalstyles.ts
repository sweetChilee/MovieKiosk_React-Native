import { Dimensions, useWindowDimensions } from "react-native";

export const colors = {
  primary: "#EC8B57",
  black: "#191919",
  red: "#FF3636",
  lightBlue: "#36D2FF",
  green: "#8FEF73",
  grey: "#767676",
  borderGrey: "#C9C9C9",
  statusGrey: "#666666",
  textGrey: "#A2A2A2",
  darkBlue: "#83abeb",
};

export const basicDimensions = {
  // 디자이너가 작업하고 있는 XD파일 스크린의 세로,가로
  height: 700,
  width: 400,
};

export const HEIGHT: any = // 높이 변환 작업
  (Dimensions.get("screen").height * (1 / basicDimensions.height)).toFixed(2);

export const WIDTH: any = // 가로 변환 작업
  (Dimensions.get("screen").width * (1 / basicDimensions.width)).toFixed(2);

export const { width: SCREEN_WIDTH } = Dimensions.get("window");
export const { height: SCREEN_HEIGHT } = Dimensions.get("window");

// FONT
export const SCREEN_FONT = Dimensions.get("window").width > 500 ? 22 : 18;

// FOOD
export const TITLE_FONT = Dimensions.get("window").width > 500 ? 27 : 20;

export const COLOR: string = "rgb(168, 77, 191)";
