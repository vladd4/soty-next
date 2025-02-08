"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";
import WelcomeStorage from "@/components/WelcomeStorage/WelcomeStorage";
import Benefits from "@/components/Benefits/Benefits";
import StorageItems from "@/components/StorageItems/StorageItems";
import PolygonSmall from "@/../public/Vector.svg";
import Polygon from "@/../public/polygon-ben-yellow.svg";
import About from "@/components/About/About";
import Calculator from "@/components/Calculator/Calculator";

import "../i18n/i18n.ts";

export default function MainPage() {
  return (
    <>
      <Header />
      <WelcomeStorage />
      <About />
      <Benefits polygon={Polygon} />
      <StorageItems polygon={PolygonSmall} />
      <Calculator />
      <Footer />
      <Modal />
    </>
  );
}
