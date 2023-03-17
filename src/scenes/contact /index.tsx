import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import ContactUs from "@/assets/ContactUs.png"
import HText from "@/shared/HText";

SelectedPage

type Props = {
    setSelectedPage:(value:SelectedPage) => void;
}

const Contact  = ({setSelectedPage}: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-50
    px-5 py-3 placeholder-gray`;

    const {
        register,
        trigger,
        formState:{errors},
    }= useForm();

{/* function for submit */}

    const onSubmit =async (e:any)=>{
        const isValid = await trigger();
        if (!isValid){
            e.preventDefault();
        }
    
    }

  return (
    <section 
    id="contact"
    className="mx-auto w-5/6 pt-24 pb-32">
        <div>
            {/* header contact */}
            <div className="md:w-3/5">
                <HText>
                    <span className="text-gray-500">CONTACTEZ-NOUS. </span><br/>
                    En quoi pouvons-nous ! <br/>
                    <span className="text-gray-500">  Vous aider ?</span>
                </HText>
                <p className="my-5"> Nous somme disponible 📧24/24 enline pour 
                    urgence, envoyer vos documents, déclarer un 
                    sinistre, suivre mon sinistre </p>
            </div>
            {/* form and image tag */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <div className="mt-10 basis-3/5 md:mt-0 bg-primary-300 p-6 rounded-2xl">
                    {/* form submit */}
                    <form
                    target="_blank"
                    onSubmit={onSubmit}
                    action=
                    "https://formsubmit.co/ec6f647e9604d2520f98b6080c0a5c76" method="POST">
                {/* nom input */}
                    <input
                    className={inputStyles}
                    type="text"
                    placeholder="Nom"
                    {...register("name",{
                        required: true,
                        maxLength: 100,
                    })}
                    />
                    {/* condition et message erreur */}
                    {errors.name &&(
                        <p className="mt-1 text-red-600">
                        {errors.name.type === "required" && "Ce champ est obligatoire."}
                        {errors.name.type === "maxLength" &&
                            "La longueur maximale est de 100 caractères."}
                        </p>
                    )}

                    {/*  email input*/}
                    <input
                    className={inputStyles}
                    type="text"
                    placeholder="Email"
                    {...register("email",{
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    />
                    {/* condition email invalid, message erreur */}
                    {errors.email &&(
                        <p className="mt-1 text-red-600">
                        {errors.email.type === "required" && "Ce champ est obligatoire."}
                        {errors.email.type === "pattern" &&
                            "Adresse e-mail invalide."}
                        </p>
                    )}
                    {/* message input */}
                    <textarea
                    className={inputStyles}
                    placeholder="Message"
                    rows={4}
                    cols={50}
                    {...register("message",{
                        required: true,
                        maxLength: 2000,
                    })}
                    />
                    {/* condition */}
                    {errors.message &&(
                        <p className="mt-1 text-red-600">
                        {errors.message.type === "required" && "Ce champ est obligatoire"}
                        {errors.message.type === "maxLength" &&
                            "La longueur maximale est de 2000 caractères."}
                        </p>
                    )}
                    {/* button submit */}
                    <button
                    type="submit"
                    className="mt-5 bg-secondary-500 
                    px-20 py-3 transition duration-400 hover:text-white hover:bg-primary-500">
                    Envoyer
                    </button>
                    </form>
                    
                </div>
                {/* imageContact */}
                    <div className="relative mt-16 basis-2/5 md:-mt-0 bg-primary-500 rounded-md">
                        <div className="md:before-content-evolvetext w-full 
                        before:absolute before:-bottom-20 before:-right-10 before:z-[1]">
                            <img className="w-full"
                            alt="contactImage"
                            src={ContactUs}
                            />
                        </div>
                    </div>
            </div>
        </div>

    </section>
  )
}

export default Contact 