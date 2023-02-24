import { View, StyleSheet } from "react-native";

export default function Map() {
  return <View style={styles.main}></View>;
}
const styles = StyleSheet.create({
  banner: {
    flex: 1,
    backgroundColor: "blue",
  },
  main: {
    flex: 5,
    backgroundColor: "grey",
  },
});
