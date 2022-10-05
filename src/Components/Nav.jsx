import React, { useEffect, useState } from 'react'
import './Nav.css'
import Button from "./Button"
import { auth } from '../firebase'
import { useDispatch } from 'react-redux'
import { logout } from '../features/userSlice'
const Nav = () => {

    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
    }

    return (
        <div className="nav">
            <div className="nav__contents container">
                <img
                    className="nav__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""
                />
                <div className="nav__buttons">
                    <p>UNLIMITED TV SHOWS & MOVIES</p>
                    <Button text="Join Now" bg="#e20813" border="0" />
                    <Button text="Sign Out" bg="transparent" border="1px" onClick={signOut} />
                </div>
            </div>
        </div>
    )
}

export default Nav