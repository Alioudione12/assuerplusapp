import Logo from "@/assets/Logo.png"
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-300 py-10">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="footerImage" src={Logo}/>
                <p className="my-5">
                    En tant qu'assureur, nous sommes 
                    là pour vous accompagner 
                    à la suite d'un accident.
                    Dans quelle situation êtes-vous ?
                </p>
                <p>Tous droits reservés ©AD</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className=" font-bold">DEMARCHES</h4>
                <p className="my-3">Incription</p>
                <p className="my-3">Connexion</p>
                <p className="my-3">Email</p>
            </div>
            <div>
            <h4 className="font-bold">CONTACTEZ-NOUS</h4>
            <p className="my-5">Vous souhaitez nous faire part d'une réclamation ?.</p>
            <p>(+33)00 00 00 00</p>
            <p>email: assuerplus@assurance.com</p>
            </div>

        </div>

    </footer>
  )
}

export default Footer