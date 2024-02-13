import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import "./Navbar.css"

export default function Navbar() {

    const [toggle, setToggle] = React.useState(false)

    return (
        <>
            <nav className="navItems1">
                <div className="navbar-logo1">
                    <NavLink to="/Home" className="txt1"><img src="imdb-logo.png" alt="" className='Nav-logo1' /></NavLink>
                    <h2 className="navbar-logo1-h1" onClick={() => setToggle(prev => !prev)}>X</h2>

                </div>





                <div className="navbar-items1">
                    <ul>

                        <li><NavLink to="/movies/popular" className="txt1">Popular</NavLink></li>
                        <li><NavLink to="/movies/top_rated" className="txt1">Top-rated</NavLink></li>
                        <li><NavLink to="/movies/upcoming" className="txt1">Upcoming</NavLink></li>
                    </ul>

                </div>


                <div className="media1">
                    <button>
                        <Link style={{ textDecoration: "none", color: "black" }} >Signup</Link>
                    </button>

                </div>



            </nav>
            {
                toggle && <nav className="navItems">
                    <div className="navbar-items">
                        <ul>

                            <li><NavLink to="/" className="txt">Popular</NavLink></li>

                            <li><NavLink to="/movies/top_rated" className="txt">Top-rated</NavLink></li>
                            <li><NavLink to="/movies/upcoming" className="txt">Upcoming</NavLink></li>
                        </ul>

                    </div>


                    <div className="media">
                        <button>
                            <Link style={{ textDecoration: "none", color: "black" }} >Signup</Link>
                        </button>

                    </div>



                </nav>
            }

        </>
    )
}
