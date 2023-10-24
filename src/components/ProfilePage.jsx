import { useState , useEffect } from "react"
import ProfileHeader from "./ProfileHeader"

function ProfilePage() {

    const person = {
        name: "Feio",
        company: "FeuraCompany",
        email: "feio123@hotmail.com",
        cpf: "naotenho"
    }

    return(
        <div className="py-11">
            
            <ProfileHeader/>

            <div className=" block md:w-3/4 md:mx-auto
            ml-4 mt-10">

                <div>
                    <span className="md:w-full md:h-52 md:mx-auto
                    bg-dark-border block h-52 w-full -mx-2
                    "></span>
                </div>
                
                <form action="" className="md:w-2/3 md:block mx-auto">
                    
                    <ul className="mt-10 text-white">
                        <li>
                            <h3 className="md:-mx-2
                            text-xl font-semibold">Informações Públicas</h3>
                            <p className="md:-mx-2
                            -mt-2 opacity-80">Informações exibidas para todos</p>
                        </li>
                    </ul>

                    <label htmlFor="">
                        <h2 className="mt-6 -ml-1 font-bold text-white text-lg">Nome de Exibição</h2>
                    </label>

                    <input className="
                    mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none placeholder:opacity-80"
                    type="text" name="nickname" id="nickname" placeholder={person.name}/>

                    <label htmlFor="">
                        <h2 className="mt-4 -ml-1 font-bold text-white text-lg">Company Name</h2>
                    </label>

                    <input className="mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none placeholder:opacity-80"
                    type="text" name="nickname" id="nickname" placeholder={person.company}/>


                    <ul className="mt-10 text-white">
                        <li>
                            <h3 className="md:-mx-2
                            text-xl font-semibold">Informações Pessoais</h3>
                            <p className="md:-mx-2
                            -mt-1 leading-4 w-3/4 opacity-80">Informações privadas (não acessíveis para os usuários)</p>
                        </li>
                    </ul>

                    <label htmlFor="">
                        <h2 className="mt-6 -ml-1 font-bold text-white text-lg">Email</h2>
                    </label>

                    <input className="mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none placeholder:opacity-80"
                    type="text" name="nickname" id="nickname" placeholder={person.email}/>

                    <label htmlFor="">
                        <h2 className="mt-6 -ml-1 font-bold text-white text-lg">CPF</h2>
                    </label>

                    <input className="mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none placeholder:opacity-80"
                    type="text" name="nickname" id="nickname" placeholder={person.cpf}/>

                    <button className="mt-7 text-white text-xl font-bold bg-logo-blue block mx-auto rounded-md px-5 h-12 hover:bg-darkest-border" 
                    type="submit">Save Changes</button>
                </form>
            </div>

        </div>
    )
}

export default ProfilePage