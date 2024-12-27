import NotreProcessus from "./mainpage/NotreProcessus";
import Questions from "./mainpage/Questions";
import Footer from "./mainpage/Footer";
import Choisir from "./mainpage/Choisir";
import Header from "./mainpage/Header";
import NousAgissons from "./mainpage/NousAgissons";
import Paroles from "./mainpage/Paroles";
import NosExperiences from "./mainpage/NosExperiences";
import BlogEt from "./mainpage/BlogEt";
import NeManquez from "./mainpage/NeManquez";
import SiteTree from "./mainpage/SiteTree";



export default function Home() {
  return (
    <div>
      <Header/>
      <NousAgissons />
      <Choisir/>
      <NotreProcessus />
      <Paroles/>
      <NosExperiences/>
      <SiteTree/>
      <Questions />
      <BlogEt/>
      <NeManquez/>
      <Footer/>
    </div>
  );
}
