import { Link, useNavigate } from 'react-router'
import { FiUser, FiLogIn } from "react-icons/fi"
import { signOut } from 'firebase/auth'
import { useContext } from 'react'

import { authContext } from '../Context/authContext'
import logo from '../images/logo.png'
import style from './style.module.scss'
import { auth } from '../Services/db'

export const Header = () => {

    const { enabled } = useContext(authContext)
   const navigate = useNavigate()

    const handleLogout = () => {
        signOut(auth)
        navigate('/')
    }


    return (

        <>
            <div className={style.container}>


                <span className={style.icons}>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        {enabled ? (
                            <FiUser size={24} onClick={handleLogout} title='Sair' style={{
                                cursor: "pointer"
                            }} />
                        ) :
                            <Link to={'/login'}>
                                <FiLogIn size={24} title='Login' />
                            </Link>
                        }
                    </div>
                </span>
            </div>
        </>
    )
}
