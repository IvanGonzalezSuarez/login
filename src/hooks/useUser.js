import {useCallback, useContext} from 'react'
import Context from 'context/UserContext'

import LoginService from 'service/login'

export default function useUser(){
    const {jwt, setJWT} = useContext(Context)

    const login = useCallback(
        ({username,password}) => {
            const jwt = LoginService({username,password})
            if(jwt !== ""){
                setJWT(jwt)
            }else{
                alert("Los datos introducidos no existen")
            }
        },
        [setJWT],
    )
    const logout = useCallback(
        () => {
            setJWT(null)
        },
        [setJWT],
    )
    return{
        isLogged: Boolean(jwt),
        timer: jwt,
        login,
        logout
    }
}