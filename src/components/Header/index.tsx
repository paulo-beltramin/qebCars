import logo from '../images/logo.png'
import { FiUser, FiLogIn } from "react-icons/fi"

import style from './style.module.scss'

export const Header = () => {

    const user = true


    return (

        <>
            <div className={style.container}>


                <span className={style.icons}>
                <div>
                    <img src={logo} alt=""/>
                </div>
                    <div>
                        {user ? (
                            <FiUser size={24} />
                        ) :
                            <FiLogIn size={24} />
                        }
                    </div>
                </span>
            </div>
        </>
    )
}
