import ProfileHeader from "./ProfileHeader"


function WishList() {
    return(
        <div>

            <ProfileHeader/>

            <div className="mt-2 bg-dark-border w-11/12 block mx-auto rounded-md py-3">

                <ul className="mt-1 mx-2 grid grid-cols-2">

                    <span className="w-11/12 h-auto block bg-slate-50 rounded-lg"></span>

                    <div>
                        <li>
                            <h2 className="font-bold">Produto A</h2>
                        </li>
                        <li>
                            <h3 className="w-3/5">Descrição do produto A que é assim e assado</h3>
                        </li>
                    </div>
                </ul>

            </div>

            <div className="mt-2 bg-sky-600 w-11/12 block mx-auto rounded-md py-3">

                <ul className="mt-1 mx-2 grid grid-cols-2">

                    <span className="w-11/12 h-auto block bg-slate-50 rounded-lg"></span>

                    <div>
                        <li>
                            <h2 className="font-bold">Produto B</h2>
                        </li>
                        <li>
                            <h3 className="w-3/5">Descrição do produto B que é assado e assim</h3>
                        </li>
                    </div>
                </ul>

            </div>

        </div>
    )
}

export default WishList