import React from 'react'
import { useSearchvalue,useMenu } from './Context'
import "../css/Search.css"
import  SongsResult  from "../js/songsResult"

export const Search = () => {
    const searchValue = useSearchvalue();
    const Theme = useMenu()

    const setSearch=()=>{
      const value = document.getElementById("search-data").value;
      searchValue.b(value.trim().toLowerCase())      
    }

    return (
        <div>
            <form className="search-form">
                <input className="search-input" type="text" id="search-data" onChange={setSearch} maxLength="80"  placeholder="Artists, songs, or podcasts" autoFocus/>
                {/* <button className="btn btn-Search" onClick={(e)=>handle(e)} ><h3>Search</h3></button> */}
            </form>
            <div className="head-card">
                <h2 className="head-title">Songs</h2>
                <a href="#top" className="head-link" Style={Theme?"color:var(--white--text)":"color:var(--dark--text)"}>See all</a>
            </div>
            {(searchValue.a===" ")?(
                <h3>Browse all</h3>
            ):(
            <div className="song-results">
               <SongsResult/>
            </div>
            )}
        </div>
    )
}
