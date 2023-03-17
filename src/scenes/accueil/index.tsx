import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png"
import homeImage from "@/assets/homeImage.png"
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage:(value: SelectedPage) => void;
}

const Accueil = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section 
    id="accueil" 
    className="gap-16 bg-primary-300 py-10 md:h-full md:pb-0">
        {/* Images et accueil page */}
        <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
            {/* image hearder */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* infos assurance:HEARDING */}
                <div className="md:-mt-20">
                    <div className="relative">
                        <div className="before:absolute before:-top-20 
                        before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt="home-page" src={HomePageText}/>
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                        Souriez, vous êtes assurés de trouver
                        l'assurance auto en ligne qu'il vous faut.
                        Garanties communes aux formules tiers sssentiel, 
                        tiers confort et tous risques.
                    </p>
                </div>
                {/* actions button */}
                <div className="mt-8 flex items-center gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Déclarer Sinistre
                    </ActionButton>
                    <AnchorLink className="text-sm font-bold
                     text-primary-500 underline hover:text-secondary-500"
                     onClick={()=> setSelectedPage(SelectedPage.Contact)}
                        href={`#${SelectedPage.Contact}`}>
                        <p> +Savoir Plus</p>
                    </AnchorLink>
                </div>
            </div>

            {/* image */}
            <div className="flex basis-3/5 justify-center 
            md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-page-graphic" src={homeImage}/>
            </div>
        </div>

    </section>
  )
}

export default Accueil