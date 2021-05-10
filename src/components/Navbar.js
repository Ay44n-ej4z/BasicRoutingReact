import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/Shop';
import PeopleIcon from '@material-ui/icons/People';

function Navbar() {
    return (
        <div className = "nav">
            <ul className = "nav_total"> 
                <li className = 'list' >
                    <Link style = {{color: 'white'}} to = "/">
                        <HomeIcon />
                    Home
                    </Link>
                </li>
                <li className = 'list'>
                    <Link style = {{color: 'white'}} to = "/products" >
                        <ShopIcon />
                    Products
                    </Link>
                </li>
                <li className = 'list'> 
                    <Link style = {{color: 'white'}} to = "/signUp">
                    <PeopleIcon />
                    SignUp
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
