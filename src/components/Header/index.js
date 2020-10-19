import React from 'react'
import { Link } from 'wouter'

import useUser from 'hooks/useUser'

import './Header.css'

export default function Header() {
    const { isLogged, logout } = useUser();

    const handleClick = e => {
        e.preventDefault()
        logout()
    }
    return (
        <header className='gf-header'>
            {
                <Link to='#' onClick={handleClick}>
                    <button className='btn-1'>Logout</button>
                </Link>
            }

        </header>
    )
}