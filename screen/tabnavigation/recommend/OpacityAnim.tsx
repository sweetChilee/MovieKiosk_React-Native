import { useRef } from "react";
import { Animated, View } from "react-native";
import AnimatedPoster from "../../../component/AnimatedPoster";
import { imagePosters } from "./imagePoster";

export default function OpacityAnim(n: any) {
  let animNumber: any = [];
  let animList: any = [];
  let first: number = n[0];
  let last: number = n[n.length - 1];

  /* 아니면 애초에 리스트에 anim을 다 집어 넣어놓고 slice통해서 추출한 다음 forEach로 추출하기...? */

  for (let i: number = first; i <= last; i++) {
    const a = animNumber.push(`anim${i}`);
  }
  // let a: any = [];
  // const test = animNumber
  //   .slice(first, last + 1)
  //   .forEach((e: any, i: number) => {
  //     e = useRef(new Animated.Value(0)).current;
  //     a.push(e);
  //     let fadeIn = Animated.timing(e, {
  //       toValue: 1,
  //       duration: 2000,
  //       useNativeDriver: true,
  //     });
  //     animList.push(fadeIn);
  //     return a;
  //   });
  // Animated.stagger(1000, animList).start();

  // let v: number = 0;
  // while (v <= a.length) {
  //   return v;
  // }
  const elementAnim = animNumber.map((arr: number, i: number) => {
    animNumber[i] = useRef(new Animated.Value(0)).current;
    let fadeIn = Animated.timing(animNumber[i], {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    });
    animList.push(fadeIn);

    return (
      <AnimatedPoster key={i}>
        <Animated.Image
          style={{ flex: 1, width: "100%", opacity: animNumber[i] }}
          source={imagePosters[i + first]}
          key={i}
        ></Animated.Image>
      </AnimatedPoster>
    );
  });
  Animated.stagger(1000, animList).start();

  return elementAnim;
}
