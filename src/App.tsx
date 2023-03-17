import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Accueil from "@/scenes/accueil";
import Services from "@/scenes/services";
import Tarifs from "@/scenes/tarifs";
import Contact from "@/scenes/contact ";
import Footer from "@/scenes/footer"




function App() {
  const [selectedPage, setSelectedPage] = useState <SelectedPage>(SelectedPage.Accueil)
  const [isTopOfPage, setIsTopPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Accueil);
      }
      if (window.scrollY !== 0) setIsTopPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);



  return (
    <div className="bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
      <Accueil setSelectedPage = {setSelectedPage}/>
      <Services setSelectedPage = {setSelectedPage}/>
      <Tarifs setSelectedPage = {setSelectedPage}/>
      <Contact setSelectedPage = {setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
