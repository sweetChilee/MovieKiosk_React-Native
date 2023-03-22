import { View, Animated } from "react-native";
import { SCREEN_WIDTH } from "../config/globalstyles";

export default function AnimatedPoster(props: any) {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: SCREEN_WIDTH / 40,
        marginVertical: SCREEN_WIDTH / 80,
      }}
    >
      {props.children}
    </View>
  );
}
