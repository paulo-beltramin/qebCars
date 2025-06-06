import { useContext, type ReactNode } from "react"
import { authContext } from "../Context/authContext"
import toast from "react-hot-toast"
import { Navigate } from "react-router"
import { AiOutlineYahoo } from "react-icons/ai"

type PrivateProps = {
    children: ReactNode
}

export const Private = ({ children }: PrivateProps) => {

    const { enabled, authLoading } = useContext(authContext)

    if (authLoading) {
        return (
            <div></div>
        )
    }

    if (!enabled) {
        return (

            <Navigate to={'/login'} />

        )

    }

    return (
        <>{children}</>
    )
}
