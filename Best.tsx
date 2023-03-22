import { Text, View } from "react-native";

const data = {
  movieCode: 20208962,
  koTitle: "대외비",
  enTitle: "The Devil's Deal",
  enOriginTitle: "",
  prdtYear: 2020,
  openDt: 20230301,
  nation: [
    {
      nationNm: "한국",
    },
  ],
  showTm: 115,
  directors: [
    {
      peopleNm: "이원태",
      peopleNmEn: "LEE Won-tae",
    },
  ],
  genreNm: [
    {
      genreNm: "범죄",
    },
    {
      genreNm: "드라마",
    },
  ],
  actor: [
    {
      peopleNm: "조진웅",
      peopleNmEn: "CHO Jin-woong",
      cast: "전해웅",
      castEn: "",
    },
    {
      peopleNm: "이성민",
      peopleNmEn: "LEE Sung-min",
      cast: "권순태",
      castEn: "",
    },
    {
      peopleNm: "김무열",
      peopleNmEn: "GIM Mu-yeol",
      cast: "김필도",
      castEn: "",
    },
  ],
  tmdbID: 640327,
  tmdbOverview:
    "1992년 부산, 밑바닥 정치 인생을 끝내고 싶은 만년 국회의원 후보 해웅. 해웅은 이번 선거에서만큼은 금뱃지를 달 것이라 확신했지만, 정치판을 뒤흔드는 권력 실세 순태에게 버림받으며 지역구 공천에서 탈락한다. 순태에 의해 짜여진 선거판을 뒤집기 위해 부산 지역 재개발 계획이 담긴 대외비 문서를 입수한 해웅. 행동파 조폭 필도를 통해 선거 자금까지 마련한 해웅은 무소속으로 선거판에 뛰어들어 승승장구한다. 순태 역시 해웅이 가진 대외비 문서의 존재를 알게 되고, 점차 해웅의 숨통을 조여오는데…",
  genreIds: [18, 80],
  userRating: 4.5,
  posterUrl: "https://image.tmdb.org/t/p/w500//lnk2cwY3CJIzKrLm0sur2U40iqp.jpg",
  updateDate: 20230313,
};
export default function Best() {
  const peopleNm =
    "감독 : " +
    data.directors[0].peopleNm +
    " / " +
    "배우 : " +
    data.actor[0].peopleNm;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>{peopleNm}</Text>
    </View>
  );
}
