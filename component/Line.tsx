import { StyleSheet, View } from "react-native";
import { COLOR } from "../config/globalstyles";

export default function Line({ width1 }: any) {
  return <View style={{ ...styles.line, width: width1 }}></View>;
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: COLOR,
    width: "60%",
    height: 2,
  },
});
