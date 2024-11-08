import Headerwithfirstpage from "./mainpage/Headerwithfirstpage";
import NotreProcessus from "./mainpage/NotreProcessus";
import Questions from "./mainpage/Questions";
import Footer from "./mainpage/Footer";
import Choisir from "./mainpage/Choisir";
import NosActes from "./mainpage/NosActes";
import Liberez from "./mainpage/Liberez";
import Motsdenotreclient from "./mainpage/Motsdenotreclient";
import SoinChez from "./mainpage/SoinChez";


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
    </div>
  );
}
