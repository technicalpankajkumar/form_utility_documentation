import SidebarItem from "./SidebariIem"
import items from "../Data/sidebar.json"
import './sidebar.css'

export default function Sidebar(){
    return (
        <div className="sidebar">
          <div className="sidebar-main-title">
            Documentation
          </div>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}