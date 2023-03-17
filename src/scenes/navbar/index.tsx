import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";



type Props = {
    isTopOfPage:boolean
    selectedPage:SelectedPage;
    setSelectedPage: (value:SelectedPage)=>void
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween ="flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled ] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const navbarBackground = isTopOfPage ?"":"bg-primary-100 drop-shadow";
    
  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* logo left side */}
                    <img src={Logo} alt="logo"/>
                    {/* right side */}
                    {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
                        {/* navbar */}
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                                page = "Accueil" 
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                                />

                            <Link 
                                page = "Services"
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage} 
                                />

                            <Link 
                                page = "Tarifs"
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                                />

                            <Link 
                                page = "Contact"
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                            />
                        </div>
                        {/* button for users create an account */}
                        <div className={`${flexBetween} gap-8`}>
                            <ActionButton setSelectedPage={setSelectedPage}>
                            Inscription
                                </ActionButton>
                            <ActionButton setSelectedPage={setSelectedPage}>
                            Connexion
                            </ActionButton>
                        </div>
                        </div>
                    ) : (
                            <button
                            className="rounded-full p-2 bg-secondary-500" 
                            onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-primary-500"/>
                            </button>
                    )}
                </div>
            </div>
        </div>
        {/*menu responsive small screen  */}
        {! isAboveMediumScreens && isMenuToggled && (
            <div 
            className="fixed right-0 bottom-0 z-40 
            h-full w-[300px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end p-12">
                    <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6"/>
                    </button>
                </div>
                    {/* responsive menu items */}
                    <div className="ml-[33px] flex flex-col gap-8 text-xl">
                        <Link 
                            page = "Accueil" 
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedPage}/>

                        <Link 
                            page = "Services"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedPage}/>

                        <Link 
                            page = "Tarifs"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedPage}/>

                        <Link 
                            page = "Contact"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedPage}/>
                </div>
                <div className={`${flexBetween} gap-2 m-3 mt-12`}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Inscription
                        </ActionButton>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Connexion
                    </ActionButton>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar
