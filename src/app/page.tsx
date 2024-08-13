import Image from "next/image";
import Expertsinsocialintervention from "./componet/Expertsinsocialintervention";
import NotreProcessus from "./componet/NotreProcessus";
import Questions from "./componet/Questions";
import Footer from "./componet/Footer";

import Choisir from "./componet/Choisir";

import NosActes from "./componet/NosActes";


export default function Home() {
  return (
    <div>
      <Expertsinsocialintervention />
      <Choisir/>
      <NotreProcessus />
      <Questions />
      <NosActes/>
      <Footer/>
    </div>
  );
}
