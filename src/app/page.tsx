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
import Pricing from "./componet/Pricing";
import Contact from "./componet/Contact";
import Soinschezmarguerite from "./componet/Soinschezmarguerite";


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
      <Pricing/>
      <Soinschezmarguerite/>
      <Footer/>
      <Contact/>
    </div>
  );
}
