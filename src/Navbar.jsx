import React from 'react'

import "./Navbar.css"
import {Link, NavLink} from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav>
                <h1><b>JS_Rider</b></h1>
                <div className="links">
                    <Link to="/" className='abc'>Home</Link>
                    <Link to="/about" className='abc'>About</Link>
                    <NavLink to="/contact" className='abc'>Contact</NavLink>
                    <NavLink to="/signup" className='abc'>SignUp</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar