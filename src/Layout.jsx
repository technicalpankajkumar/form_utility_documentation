import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <>
            <Navbar />
            <div className="main">
                <Sidebar />
                <div className="container" style={{ padding: "20px" }}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout