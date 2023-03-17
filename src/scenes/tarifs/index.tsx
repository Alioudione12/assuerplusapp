import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import HText from "@/shared/HText";
import { TarifType } from "@/shared/types";
import Tarif from "./Tarif";

{/* tableau des tarif */}
const tarif:Array<TarifType> = [
    {
    name: "Assurance Temporaires",
    description:" Vous retrouverez donc une assurance temporaire auto à partir de 3.50€/mois",
    image: image1,
    },
    {
    name: "Assurance Frontières",
    description:
        "Vous retrouverez donc une assurance temporaire auto à partir de 5,20€/mois",
    image: image2,
    },
    {
    name: "Assurance Poids Lourd",
    description:"Une assurance provisoire poids lourd est proposée au tarifminimum de 10.47€/mois",
    image: image3,
    },
]


type Props = {
    setSelectedPage:(value:SelectedPage) => void;
}

const Tarifs = ({setSelectedPage}: Props) => {
  return (
    <section id="tarifs" className="w-full bg-primary-300 py-40">
        <div className="mx-auto w-5/6">
            <div className="md:w-3/5">
                        <HText>NOS TARIFS D'ASSURANCE AUTO</HText>
                    <p className="py-5">
                    Tableau comparateur 
                    d'assurances temporaires
                    À noter que nos offres d'assurance excluent le transport 
                    de marchandises ainsi que le transport de personnes à titre onéreux 
                    </p>
            </div>
        </div>
        {/* tarifs scrolling images */}
        <div className="mt-2 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[1800px] whitespace-pre-wrap">
            {tarif.map((item: TarifType, index)=>(
                        <Tarif 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}

            </ul>
        </div>
    </section>
  )
}

export default Tarifs