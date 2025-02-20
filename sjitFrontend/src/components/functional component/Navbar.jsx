import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../css/Navbar.css'
const Navbar =()=>{
    var [dropdown,showDropdown]= useState(false);
    return(
        <header>
            <nav>
                <li><Link to='/'>Home,</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                <div class ="dropdown" onClick={()=>showDropdown(!dropdown)}>
                <li><a>Hooks</a>
                {dropdown && (<ul class="dropdown-menu">
                    <li><Link to='/use-State'>Use State</Link></li>
                    <li><Link to='/use-Effect'>Use Effect</Link></li>
                </ul>)}
                </li>
                </div>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/Signup'>Signup</Link></li>
            </nav>
        </header>
    )
}
export default Navbar