import SidebarItem from "./SidebariIem"
import items from "../Data/sidebar.json"
import './sidebar.css'
import { useContext } from "react"
import { DataContextAPI } from "../Layout"

export default function Sidebar(){
  const contextAPI = useContext(DataContextAPI)
    return (
        <div className="sidebar">
          <div className="sidebar-main-title">
            Documentation <i className="bi bi-x-lg" onClick={()=>contextAPI.setData(pre => ({...pre,toggle:false }))}></i>
          </div>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}