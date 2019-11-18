import React from './node_modules/react';
import { Route, Link } from './node_modules/react-router-dom'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function Initial() {
    return (
        <>
        <div>
            <Link to='/sign-up' className='links'>Sign Up</Link>
            <Link to='/login' className='links'>Login</Link>
        </div>

            <Route path='/sign-up' component={ SignUpForm }/>
            <Route path='/login' component={ LoginForm }/>
        </>
    )
}

export default Initial