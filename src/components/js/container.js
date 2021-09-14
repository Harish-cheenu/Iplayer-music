import React from 'react'
import {useMenu,useActiveMenu} from "./Context"
import { Search } from './Search'
const Container = () => {
    const useTheme = useMenu();
    const toggle = useActiveMenu();
    
    return (
        <div className={useTheme?"container-xl dark-mode":"container-xl light-mode"}>
        <h1 Style={"text-align:center;padding:1rem"}>ITUNES</h1>
        <div className="Main-Container">
            { toggle.a ? <Search/> : <h1>hello Home</h1>  }
        </div>
        </div>
    )
}
export default Container;