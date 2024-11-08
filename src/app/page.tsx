import NotreProcessus from "./mainpage/NotreProcessus";
import Questions from "./mainpage/Questions";
import Footer from "./mainpage/Footer";
import Choisir from "./mainpage/Choisir";
import NosActes from "./mainpage/NosActes";
import Liberez from "./mainpage/Liberez";
import Motsdenotreclient from "./mainpage/Motsdenotreclient";
import SoinChez from "./mainpage/SoinChez";
import Header from "./mainpage/Header";
import NousAgissons from "./mainpage/NousAgissons";


export default function Home() {
  return (
    <div>
      <Header/>
      <NousAgissons />
      <Choisir/>
      <NotreProcessus />
      <SoinChez/>
      <Motsdenotreclient/>
      <Questions />
      <NosActes/>
      <Liberez/>
      <Footer/>
    </div>
  );
}
