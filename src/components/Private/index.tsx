import { useContext, type ReactNode } from "react"
import { authContext } from "../Context/authContext"
import { Navigate } from "react-router"


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
