import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { SelectedPage, ServiceType } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import Service from "./Service";
import ServicesPageGraphic from "@/assets/ServicesPageGraphic.png"




{/* tableau des services  */}
const services: Array<ServiceType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title:" Formules & avantages",
        description:"Responsabilité civile, Défense pénale, Recours suite à un accident, Assistance 50 km. ",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title:"Auto jeune conducteur",
        description:"251€ d'économies, Dépannage en 45 minutes, Aucune avance des frais, Assistance 24H/24. ",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title:" Assurance Auto Professionnel",
        description:"Assistance 50 km, Incendie / vol / explosion, Dommages tous accidents, Défense pénale.",

    },
];


type Props = {
    setSelectedPage:(value:SelectedPage) => void;
}

const Services = ({setSelectedPage}: Props) => {
  return (
    <section 
    id="services" 
    className="mx-auto min-h-full w-5/6 py-20">
        <div>
        {/* infos de la page services */}
        <div className="md:my-5 md:w-3/5">
        <HText>EN ROUTE POUR LA CONFIANCE.</HText>
            <p className="my-5 text-sm">
            Nous vous proposons trois formules d'assurance 
            auto simples et accessibles. Trouvez celle qui 
            vous convient le mieux, vous êtes assuré.
            Que vous conduisiez solo ou en famille, que 
            vous possédiez un véhicule flambant neuf ou 
            que vous ayez hérité de celui de Mamie, 
            l'assurance au Tiers, également appelée 
            Tiers Essentiel chez AssuerPlus, vous offre 
            une base commune de garanties indispensables.
            </p>
        </div>
        {/* les trois services offertes  */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
            {services.map((service:ServiceType)=>(
            <Service 
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            setSelectedPage={setSelectedPage}
            />
            ))}
        </div>
    </div>

    </section>
  )
}

export default Services