import { View } from "react-native";
import { SCREEN_WIDTH } from "../config/globalstyles";

export default function AnimatedPoster(props: any) {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: SCREEN_WIDTH / 40,
        marginVertical: SCREEN_WIDTH / 80,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.8,
        shadowRadius: 7,
      }}
    >
      {props.children}
    </View>
  );
}
