import { TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { COLOR, SCREEN_WIDTH } from "../../../config/globalstyles";

export default function RecommendResultPoster(props: any) {
  return (
    <TouchableOpacity style={styles.subitem} {...props}>
      <ImageBackground
        source={{ uri: props.URI }}
        style={{
          width: "100%",
          height: props.height,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  subitem: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  rankText: {
    color: "white",
    fontSize: SCREEN_WIDTH / 45,
    fontWeight: "600",
    textAlign: "center",
  },
  outBox: {
    flex: 1,
    marginTop: SCREEN_WIDTH / 80,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 24,
  },
  inBox: {
    flex: 1,
    borderWidth: 5,
    borderColor: COLOR,
    borderRadius: 25,
  },
});
