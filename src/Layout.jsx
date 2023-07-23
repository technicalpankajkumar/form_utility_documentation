import React, { createContext, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import './Layout.css'

export const DataContextAPI = createContext()

function Layout() {
    const [data,setData] = useState({ toggle:true,})


    return (
        <DataContextAPI.Provider value={{data,setData}}>
            <Navbar />
            <div className="main">
                { data.toggle ? <Sidebar /> : <></> }
                <div className="outlet-container">
                    <Outlet />
                </div>
            </div>
        </DataContextAPI.Provider>
    )
}

export default Layout