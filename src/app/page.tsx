import Image from "next/image";
import Expertsinsocialintervention from "./componet/Expertsinsocialintervention";
import NotreProcessus from "./componet/NotreProcessus";
import Questions from "./componet/Questions";
import Footer from "./componet/Footer";
import Choisir from "./componet/Choisir";

export default function Home() {
  return (
    <div>
      <Expertsinsocialintervention />
      <Choisir/>
      <NotreProcessus />
      <Questions />
      <Footer/>
    </div>
  );
}
