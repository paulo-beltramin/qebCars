import { Link } from "react-router"
import style from './style.module.scss'


export const Header2 = () => {
    return (
        <div className={style.container}>
            <header className={style.container__header}>
                <ul>

                    <Link to={'/painel'}>
                        <li>Painel</li>
                    </Link>

                    <Link to={'/cadastrarVeiculo'}>
                        <li>Novo carro</li>
                    </Link>

                </ul>
            </header>
        </div>
    )
}
