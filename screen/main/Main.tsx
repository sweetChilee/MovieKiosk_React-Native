import Clock from "./Clock";
import Login from "./Login";
import HeadPoster from "./HeadPoster";
import { StatusBar } from "expo-status-bar";
import ImageCarousel from "./carousel/ImageCarousel";
import Carousel from "./carousel/Carousel";

interface ImageCarouselItem {
  id: number;
  uri?: string;
  title?: string;
}

export default function Main() {
  return (
    <>
      <HeadPoster />
      <Clock />
      <Login />
      <Carousel />
      <StatusBar style="light" />
    </>
  );
}
