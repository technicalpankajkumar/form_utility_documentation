import React, { memo, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { DataContextAPI } from '../Layout'

function Navbar() {
  const contextAPI = useContext(DataContextAPI)
  console.log(contextAPI)
  return (
    <div className='navbar'>
      <nav className='nav'>
        <i className="bi bi-list" onClick={()=>contextAPI.setData(pre => ({...pre,toggle:true }))}></i>
  
        <h2 className='navbar-title'>
          <i className="bi bi-code-square"></i>
          Form-Utility-Package
        </h2>

        <div className='navbar-social-icon'>
          <div id="navbar-npm-icon">
            <img src="/assets/npm.png" id="npm-icon" />
          </div>
          <div id="navbar-github-icon">
            <img src="/assets/github.jpg" id="github-icon" />
          </div>
        </div>


        <ul className='navbar-menu'>
          <li><Link to={`installation`}> Home </Link></li>
          <li><Link to={`label`} >Learn</Link></li>
          <li title='npm registry'><a href={`https://www.npmjs.com/package/form_utility_package`} target='blank'>npmRegistry</a></li>
          <li title='github about'><a href={`https://github.com/technicalpankajkumar`} target='blank'>About</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default memo(Navbar)