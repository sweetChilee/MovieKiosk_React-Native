import { Animated } from "react-native";
import { useRef } from "react";

export const imagePoster = {
  suzume: require("../../../img/suzume.jpeg"),
  hero: require("../../../img/hero.jpeg"),
  soulmate: require("../../../img/soulmate.jpeg"),
  shazam: require("../../../img/shazam.jpeg"),
  slamdunk: require("../../../img/slamdunk.jpeg"),
  demonSlayer: require("../../../img/demonSlayer.jpeg"),
  someDay: require("../../../img/someDay.jpeg"),
  fabelmans: require("../../../img/fabelmans.jpeg"),
  knock: require("../../../img/knock.jpeg"),
  topgun: require("../../../img/topgun.jpeg"),
  six: require("../../../img/six.jpeg"),
  search: require("../../../img/search.jpeg"),
};
export const imagePosters = [
  require("../../../img/suzume.jpeg"),
  require("../../../img/hero.jpeg"),
  require("../../../img/soulmate.jpeg"),
  require("../../../img/shazam.jpeg"),
  require("../../../img/slamdunk.jpeg"),
  require("../../../img/demonSlayer.jpeg"),
  require("../../../img/someDay.jpeg"),
  require("../../../img/fabelmans.jpeg"),
  require("../../../img/knock.jpeg"),
  require("../../../img/topgun.jpeg"),
  require("../../../img/six.jpeg"),
  require("../../../img/search.jpeg"),
  require("../../../img/suzume.jpeg"),
  require("../../../img/hero.jpeg"),
  require("../../../img/soulmate.jpeg"),
  require("../../../img/shazam.jpeg"),
  require("../../../img/slamdunk.jpeg"),
  require("../../../img/demonSlayer.jpeg"),
  require("../../../img/someDay.jpeg"),
  require("../../../img/fabelmans.jpeg"),
  require("../../../img/knock.jpeg"),
  require("../../../img/topgun.jpeg"),
  require("../../../img/six.jpeg"),
  require("../../../img/search.jpeg"),
];

export function opacAnim(index: number) {
  let i = 0;
  let animNumber: any = [];
  let animList = [];
  while (i <= index) {
    let b = i++;
    animNumber.push(`anim${b}`);
    animNumber[b] = useRef(new Animated.Value(0)).current;
    let fadeIn = Animated.timing(animNumber[b], {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    });
    animList.push(fadeIn);
  }

  Animated.stagger(200, animList).start();

  return animNumber[index];
}
