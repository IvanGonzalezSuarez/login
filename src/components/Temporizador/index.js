import React, { useEffect } from "react";
import { useLocation } from "wouter"
import useUser from 'hooks/useUser'

import Header from "components/Header";

import './Temporizador.css'

export default function Login() {
    const [, navigate] = useLocation()
    const { isLogged, timer } = useUser()

    useEffect(() => {
        if (!isLogged) {
            navigate('/')
        }
        if (timer) {
            console.log(timer)
        }
    }, [isLogged, navigate])

    return (
        <>
            <h2>WELCOME!</h2>
            <h5>The last time you accessed was</h5>
            {
                timer != null ?
                    <>
                        <div className="divContent">
                            <p>{timer.dias}<label>days</label></p>
                            <p>{timer.horas}<label>hours</label></p>
                            <p className="parrafos">{timer.minutos}<label>minutes</label></p>
                            <p className="parrafos">{timer.segundos}<label>seconds</label></p>
                        </div>
                    </>
                    : ""
            }
            <Header/>
        </>
    );
}
