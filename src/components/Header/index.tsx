
import { useContext } from 'react'
import { FiUser } from "react-icons/fi"

import { authContext } from '../Context/authContext'
import logo from '../images/logo.png'
import style from './style.module.scss'
import { Link } from 'react-router'


export const Header = () => {

    const { enabled } = useContext(authContext)
   


    return (

        <>
            <div className={style.container}>


                <span className={style.icons}>
                    <Link to={'/'}>
                        <div>
                            <img src={logo} alt="" />
                        </div></Link>
                    <div>
                        {enabled ? (
                            <>
                                <FiUser size={24}  title='Sair' style={{
                                    cursor: "pointer"
                                }} />

                                <Link to={'/painel'} className={style.icons__painel}>Meu painel</Link>
                            </>
                        ) :
                            <Link to={'/login'}>
                                <button>Faça Login</button>
                            </Link>
                        }
                    </div>
                </span>
            </div>
        </>
    )
}
