import React from 'react';
import {useMenu,useChange} from "./Context"
import { useActiveMenu } from './Context';
const Sidebar = () => {
    
    const setTheme = useChange();
    const useTheme = useMenu();
    const toggle = useActiveMenu();
    const setToggle = useActiveMenu();
    return (
        <div className="sidebar"  Style={useTheme?`background-color: var(--bgMenu--Dark);color : var(--white--text);`:`background-color:var(--bgMenu--Light);color : var(--dark--text);`}>
            <div className="sidebar_logo">
                <h2>Itunes Music</h2>
            </div> 
            <ul id="active" className="sidebar_items">
                <a className="--home" Style={useTheme?`color: var(--white--text)`:`color: var(--dark--text)`} href="#top"><li className={toggle.a===0?"sidebar_item active":"sidebar_item"} onClick={()=>setToggle.b(0)}>Home</li></a>
                <a className="--search" Style={useTheme?`color: var(--white--text)`:`color: var(--dark--text)`} href="#top"><li className={toggle.a===1?"sidebar_item active":"sidebar_item"} onClick={()=>setToggle.b(1)}>Search</li></a>
            </ul>
            <hr/><br/>
            <h3>Dark Mode</h3>    
            <br/>
            <div className="toggle">
                <input type="checkbox" defaultChecked={true} onClick={setTheme} />
            </div>      
        </div>
    )
}
export default Sidebar;