import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Overlay } from "react-native-elements";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../config/globalstyles";

export default function LoadingOverlay(props: any) {
  return (
    <Overlay
      isVisible={props.visible}
      overlayStyle={{ flex: 1, backgroundColor: "black" }}
    >
      <View
        style={{
          flex: 1,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, width: "100%" }}>
          <LottieView
            source={require("../assets/lottie/starfall.json")}
            autoPlay
            loop={true}
            resizeMode="cover"
          ></LottieView>
        </View>
        <View style={{ flex: 1, width: "100%" }}>
          <View style={{ flex: 1 }}></View>
          <LottieView
            source={require("../assets/lottie/starfall.json")}
            autoPlay
            loop={true}
            resizeMode="cover"
          ></LottieView>
          <LottieView
            source={require("../assets/lottie/loading-command.json")}
            autoPlay
            loop={true}
            resizeMode="contain"
            style={{ flex: 1 }}
          ></LottieView>
        </View>
        <View style={{ flex: 1, width: "100%" }}>
          <LottieView
            source={require("../assets/lottie/please-wait.json")}
            autoPlay
            loop={true}
            resizeMode="cover"
          ></LottieView>
          <LottieView
            source={require("../assets/lottie/starfall.json")}
            autoPlay
            loop={true}
            resizeMode="cover"
            style={{ flex: 1 }}
          ></LottieView>
        </View>
        <View style={{ flex: 0.7, width: "100%" }}>
          <LottieView
            source={require("../assets/lottie/starfall.json")}
            autoPlay
            loop={true}
            resizeMode="cover"
            style={{ flex: 1 }}
          ></LottieView>
        </View>
      </View>
    </Overlay>
  );
}
