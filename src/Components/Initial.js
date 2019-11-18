import React from 'react';
import { Route, Link } from 'react-router-dom'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function Initial() {
    return (
        <>
            <Link to='/sign-up'>Sign Up</Link>
            <Link to='/login'>Login</Link>

            <Route path='/sign-up' component={ SignUpForm }/>
            <Route path='/login' component={ LoginForm }/>
        </>
    )
}

export default Initial