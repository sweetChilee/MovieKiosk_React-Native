import Clock from "./Clock";
import Login from "./Login";
import HeadPoster from "./HeadPoster";
import Carousel from "./Carousel";
import { StatusBar } from "expo-status-bar";

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
