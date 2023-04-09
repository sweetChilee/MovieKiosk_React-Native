import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { SCREEN_WIDTH } from "../../config/globalstyles";

// 순위 별 트로피 표시 위한 딕셔너리
export const RANK: any = {
  first: (
    <MaterialCommunityIcons
      name="trophy-award"
      size={SCREEN_WIDTH / 25}
      color="gold"
    />
  ),
  second: (
    <MaterialCommunityIcons
      name="trophy-award"
      size={SCREEN_WIDTH / 25}
      color="silver"
    />
  ),
  third: (
    <MaterialCommunityIcons
      name="trophy-award"
      size={SCREEN_WIDTH / 25}
      color="rgb(205, 127, 50)"
    />
  ),
  remain: <Feather name="award" size={SCREEN_WIDTH / 35} color="white" />,
};

export type Movie = {
  movieCode?: string | number;
  genreName?: number;
  directorNm: string;
  actorNm: string;
  peopleNm: string;
  titleNm: string;
  poster: string;
  rank: number;
  overView?: string;
};

export type ItemProps = {
  movieCode?: string | number | any;
  genreName?: number;
  directorNm: string;
  actorNm: string;
  peopleNm: string;
  titleNm: string;
  poster: string;
  rank: number;
  overView: string;
  // poster: string;
};
