export const setMenu = [
  {
    menu: "스몰 세트",
    price: "₩ 7,000",
    src: require("../foodMenu/assets/img/set/small.png"),
  },
  {
    menu: "미들 세트",
    price: "₩ 10,000",
    src: require("../foodMenu/assets/img/set/middle.png"),
  },
  {
    menu: "더블 세트",
    price: "₩ 13,000",
    src: require("../foodMenu/assets/img/set/double.png"),
  },
  {
    menu: "라지 세트",
    price: "₩ 16,000",
    src: require("../foodMenu/assets/img/set/large.png"),
  },
  {},
];

export const popcornMenu = [
  {
    menu: "고소 팝콘",
    price: "₩ 5,000",
    src: require("../foodMenu/assets/img/pop/normalPopcorn.png"),
  },
  {
    menu: "달콤 팝콘",
    price: "₩ 6,000",
    src: require("../foodMenu/assets/img/pop/sweetPopcorn.png"),
  },
  {
    menu: "치즈 팝콘",
    price: "₩ 6,000",
    src: require("../foodMenu/assets/img/pop/cheesePopcorn.png"),
  },
  {
    menu: "어니언 팝콘",
    price: "₩ 6,000",
    src: require("../foodMenu/assets/img/pop/onionPopcorn.png"),
  },
  {
    menu: "고소 라지 팝콘",
    price: "₩ 6,000",
    src: require("../foodMenu/assets/img/pop/normalLarge.png"),
  },
  {
    menu: "달콤 라지 팝콘",
    price: "₩ 7,000",
    src: require("../foodMenu/assets/img/pop/sweetLarge.png"),
  },
  {
    menu: "치즈 라지 팝콘",
    price: "₩ 7,000",
    src: require("../foodMenu/assets/img/pop/cheeseLarge.png"),
  },
  {
    menu: "어니언 라지 팝콘",
    price: "₩ 7,000",
    src: require("../foodMenu/assets/img/pop/onionLarge.png"),
  },
  {
    menu: "사이즈 업(UP)",
    price: "₩ 1,000",
    src: require("../foodMenu/assets/img/pop/upgrade.png"),
  },
  {},
];

export const drinkMenu = [
  {
    menu: "아메리카노(HOT)",
    price: "₩ 3,500",
    src: require("../foodMenu/assets/img/drink/hotAmericano.png"),
  },
  {
    menu: "아메리카노(ICE)",
    price: "₩ 4,000",
    src: require("../foodMenu/assets/img/drink/iceAmericano.png"),
  },
  {
    menu: "에이드",
    price: "₩ 5,000",
    src: require("../foodMenu/assets/img/drink/Ade.png"),
  },
  {
    menu: "탄산 음료",
    price: "₩ 2,500",
    src: require("../foodMenu/assets/img/drink/sparkling.png"),
  },
  {
    menu: "탄산 음료(L)",
    price: "₩ 3,000",
    src: require("../foodMenu/assets/img/drink/sparkling(L).png"),
  },
  {
    menu: "사이즈 업(UP)",
    price: "₩ 1,000",
    src: require("../foodMenu/assets/img/pop/upgrade.png"),
  },
];

export const snackMenu = [
  {
    menu: "나쵸",
    price: "₩ 4,900",
    src: require("../foodMenu/assets/img/food/nacho.png"),
  },
  {
    menu: "맛 밤",
    price: "₩ 3,500",
    src: require("../foodMenu/assets/img/food/nut.png"),
  },
  {
    menu: "오징어",
    price: "₩ 3,500",
    src: require("../foodMenu/assets/img/food/squid.png"),
  },
  {
    menu: "핫도그",
    price: "₩ 5,000",
    src: require("../foodMenu/assets/img/food/hotDog.png"),
  },
  {},
];

export const formatData = (data: any, numColumns: number) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

export type FoodItemProps = {
  item: { menu: string; src: number; price: string };
};
