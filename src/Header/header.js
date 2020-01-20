import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { users } from '../data/users'

const Header = () => {

    const initialHighlightState = {
        home: 'active',
        login: null,
        signUp: null,
        cart: null
    }
    const [isActive, setIsActive] = useState(initialHighlightState)

    const highlightLogin = () => {
        setIsActive({ ...initialHighlightState, login: 'active', home: null })
    }
    const highlightSignUp = () => {
        setIsActive({ ...initialHighlightState, signUp: 'active', home: null })
    }
    const highlightCart = () => {
        setIsActive({ ...initialHighlightState, cart: 'active', home: null })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/" onClick={() => setIsActive(initialHighlightState)}>Computer Shop</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className={'nav-item ' + isActive.home}>
                            <Link className="nav-link" to='/' onClick={() => setIsActive(initialHighlightState)}>Home
                            </Link>
                        </li>
                        <li className={'nav-item ' + isActive.login}>
                            <Link className="nav-link" to="/login" onClick={e => highlightLogin(e)}>Login</Link>
                        </li>
                        <li className={'nav-item ' + isActive.signUp}>
                            <Link className="nav-link" to="#!" onClick={e => highlightSignUp(e)}>Sign Up</Link>
                        </li>
                        <li className={'nav-item ' + isActive.cart}>
                            <Link className="nav-link" to="#!" onClick={e => highlightCart(e)}>Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;