import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";
import WelcomeStorage from "@/components/WelcomeStorage/WelcomeStorage";
import Benefits from "@/components/Benefits/Benefits";
import StorageItems from "@/components/StorageItems/StorageItems";
import PolygonSmall from "@/../public//Polygon 3.svg";
import Polygon from "@/../public/polygon-ben-orange.svg";
import About from "@/components/About/About";
import Calculator from "@/components/Calculator/Calculator";

export default function Home() {
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
