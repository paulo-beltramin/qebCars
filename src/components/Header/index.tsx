import logo from '../images/logo.png'
import { FiUser, FiLogIn } from "react-icons/fi"

import style from './style.module.scss'
import { Link } from 'react-router'

export const Header = () => {

    const user = false


    return (

        <>
            <div className={style.container}>


                <span className={style.icons}>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        {user ? (
                            <FiUser size={24} />
                        ) :
                            <Link to={'/login'}>
                                <FiLogIn size={24} />
                            </Link>
                        }
                    </div>
                </span>
            </div>
        </>
    )
}
