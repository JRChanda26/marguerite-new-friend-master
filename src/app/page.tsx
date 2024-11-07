import Image from "next/image";
import Headerwithfirstpage from "./componet/Headerwithfirstpage";
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
import Ourcaremanagementsolutions from "./componet/ourcaremanagementsolutions";
import Blogs from "./componet/Blogs";
import Managementbycare from "./componet/Managementbycare";
import BlogsNews from "./componet/BlogsNews";


export default function Home() {
  return (
    <div>
      <Headerwithfirstpage />
      
      <Choisir/>
      <NotreProcessus />
      <SoinChez/>
      <Motsdenotreclient/>
      <Questions />
      <NosActes/>
      <Liberez/>
      <Footer/>

      {/* <Pricing/>
      <Soinschezmarguerite/>
      <Contact/>
      <Ourcaremanagementsolutions/>
      <Blogs/>
      <Managementbycare/>
      <BlogsNews/> */}
    </div>
  );
}
