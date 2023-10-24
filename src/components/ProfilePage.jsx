import { useState , useEffect } from "react"
import ProfileHeader from "./ProfileHeader"

function ProfilePage() {

    return(
        <div>
            
            <ProfileHeader/>

            <div className="ml-4 mt-10">
                <form action="">
                    
                    <ul className="mt-10 text-white">
                        <li>
                            <h3 className="text-xl font-semibold">Informações Públicas</h3>
                            <p className="-mt-2 opacity-80">Informações exibidas para todos</p>
                        </li>
                    </ul>

                    <label htmlFor="">
                        <h2 className="mt-6 -ml-1 font-medium text-white text-lg">Nome de Exibição</h2>
                    </label>

                    <input className="mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none"
                    type="text" name="nickname" id="nickname" placeholder="Your name"/>

                    <label htmlFor="">
                        <h2 className="mt-4 -ml-1 font-medium text-white text-lg">Company Name</h2>
                    </label>

                    <input className="mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none"
                    type="text" name="nickname" id="nickname" placeholder="Enterprise name"/>


                    <ul className="mt-10 text-white">
                        <li>
                            <h3 className="text-xl font-semibold">Informações Pessoais</h3>
                            <p className="-mt-1 leading-4 w-3/4 opacity-80">Informações privadas (não acessíveis para os usuários)</p>
                        </li>
                    </ul>

                    <label htmlFor="">
                        <h2 className="mt-6 -ml-1 font-medium text-white text-lg">Email</h2>
                    </label>

                    <input className="mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none"
                    type="text" name="nickname" id="nickname" placeholder="youremail@hotmail.com"/>

                    <label htmlFor="">
                        <h2 className="mt-6 -ml-1 font-medium text-white text-lg">CPF</h2>
                    </label>

                    <input className="mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none"
                    type="text" name="nickname" id="nickname" placeholder="000.000.000-00"/>

                    <button className="mt-7 text-white text-xl bg-sky-600 block mx-auto rounded-md px-5 h-12" 
                    type="submit">Save Changes</button>
                </form>
            </div>

        </div>
    )
}

export default ProfilePage