import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { auth } from "../Services/db";


type AuthProps = {
    enabled: boolean,
    authLoading: boolean
}

type ProviderProps = {
    children: ReactNode
}

type UserProps = {
    uid: string,
    name: string | null,
    email: string | null
}

export const authContext = createContext({} as AuthProps)


export const AuthProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<UserProps | null>(null)
    const [authLoading, setAuthLoading] = useState(true)


    useEffect(() => {

        const unSub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user?.email,
                    name: user?.displayName

                })

                setAuthLoading(false)
            } else {
                setUser(null)
                setAuthLoading(false)
            }
        })
        return () => {
            unSub()
        }
    }, [])

    return (
        <authContext.Provider value={{
            enabled: !!user,
            authLoading
        }}

        >
            {children}
        </authContext.Provider>
    )
}