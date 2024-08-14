import Image from "next/image";
import Expertsinsocialintervention from "./componet/Expertsinsocialintervention";
import NotreProcessus from "./componet/NotreProcessus";
import Questions from "./componet/Questions";
import Footer from "./componet/Footer";

import Choisir from "./componet/Choisir";

import NosActes from "./componet/NosActes";
import Liberez from "./componet/Liberez";
import Motsdenotreclient from "./componet/Motsdenotreclient";
import SoinChez from "./componet/SoinChez";


export default function Home() {
  return (
    <div>
      <Expertsinsocialintervention />
      <SoinChez/>
      <Choisir/>
      <NotreProcessus />
      <Motsdenotreclient/>
      <Questions />
      <NosActes/>
      <Liberez/>
      <Footer/>
    </div>
  );
}
