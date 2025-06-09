import { Link, useNavigate } from "react-router"
import style from './style.module.scss'
import { signOut } from "firebase/auth"
import { auth } from "../Services/db"


export const Header2 = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        signOut(auth)
        navigate('/')
    }
    return (
        <div className={style.container}>
            <header className={style.container__header}>
                <ul>

                    <div className={style.container__header__nav}>
                        <Link to={'/painel'}>
                            <li>Painel</li>
                        </Link>

                        <Link to={'/cadastrarVeiculo'}>
                            <li>Novo carro</li>
                        </Link>
                    </div>

                    <div>
                        <button onClick={handleLogout}>
                            Sair
                        </button>
                    </div>

                </ul>
            </header>
        </div>
    )
}
