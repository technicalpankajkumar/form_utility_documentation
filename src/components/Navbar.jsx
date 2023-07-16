import React,{memo} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <h2 className='navbar-title'><i class="bi bi-code-square"></i> Form-Utility-Package</h2>
            <search>
                <input type='search' name='search' id='search-bar' placeholder='Search your query...' className='search'/>
            </search>
            <ul>
                <li><Link to={`installation`}> Home </Link></li>
                <li><Link to={`label`} >Learn</Link></li>
                <li title='npm registry'><a href={`https://www.npmjs.com/package/form_utility_package`} target='blank'  >npm-registry</a></li>
                <li title='github about'><a href={`https://github.com/technicalpankajkumar`} target='blank'>About</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default memo(Navbar)