import React, { useState } from 'react'
import './SignInScreen.css';
import { auth } from '../../firebase';

const SignInScreen = () => {

    const [email, setEmail] = useState('kaifkhan@gmail.com');
    const [password, setPassword] = useState('kaifkhan'); 


    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            email,
            password
        ).then((authUser) => {
            console.log('success');
        }
        ).catch((error) => {
            alert(error.message);
        }
        )

    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            email,
            password
        ).then((authUser) => {
            console.log('success');
        }
        ).catch((error) => {
            alert(error.message);
        }
        )
    }

    const handleChange = (e,setValue) => {
        setValue(e.target.value);
    }

    return (
        <div className="signInScreen">
            <form>
                <h1>Sign In</h1>
                <input  value={email} onChange={()=>handleChange(setEmail)} type="email" placeholder="Email" />
                <input  value={password} onChange={()=>handleChange(setPassword)} type="password" placeholder="Password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signInScreen__gray">New to Netflix? </span>
                    <span className="signInScreen__link" onClick={register}>Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen