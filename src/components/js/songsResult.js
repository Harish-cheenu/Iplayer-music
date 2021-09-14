import React,{useEffect} from 'react'
import { useSearchvalue,useSongData,usePlaylist,usePlayPause } from './Context'
import {ImPlay2,ImPause} from 'react-icons/im'
// import axios from "axios"


const SongsResult = () => {
    const SongData = useSongData();
    const searchValue = useSearchvalue();
    const playlist = usePlaylist();
    const playPause = usePlayPause();


    const url = `https://iplayer-music.herokuapp.com/search/${searchValue.a}`
    
    useEffect(() => {
        async function fetchData(){
            const res = await fetch(url)
            
            const json = await res.json()
            // console.log(json)
            SongData.b(e=>json.results)
            
        }
        fetchData();
    },[searchValue.a,url]) // eslint-disable-line react-hooks/exhaustive-deps
   
    function handleGiveLike(e){
        console.log(e)
        e.classList.add("disable");
        e.parentNode.lastChild.classList.remove("disable")
    }
    function handleRemoveLike(e){
        console.log(e)
        e.classList.add("disable")
        e.parentNode.firstChild.classList.remove("disable")
    }
    function handlePlay(e,tag){
        playlist.b(e)
        playPause.b(1)
        let allpausebtn = document.getElementsByClassName("pause-icon")
        let allplaybtn = document.getElementsByClassName("play-icon")
        for(let i=0; i<allpausebtn.length; i++){
           allpausebtn[i].classList.remove("disable");
           allpausebtn[i].classList.add("disable");
           allplaybtn[i].classList.remove("disable")
        }
        tag.classList.add("disable")
        tag.parentNode.lastChild.classList.remove("disable")
       
    }
    function handlePause(e,tag){
        // playlist.b(e)
        playPause.b(0)
        tag.classList.add("disable")
        tag.parentNode.firstChild.classList.remove("disable")
    }

    return (
    <div> 
        {console.log(searchValue.a)}
        {SongData.a.map((e)=>(
            <div className="song-vertical-card" key={e.trackId}>
                <div className="track-img">
                    <img src={ e.artworkUrl60} alt={"..."} />
                    <i id="container_playPause">
                       <button className="playPause play-icon" onClick={(tag)=>handlePlay(e,tag.currentTarget)} > <ImPlay2  size={28} /> </button> 
                       <button className="playPause pause-icon disable" id="pause=icon-id" onClick={(tag)=>handlePause(e,tag.currentTarget)}><ImPause size={28}/> </button>
                    </i>
                </div>
                <div className="song-vertical-card--Name">
                    <h4>{e.trackName}</h4>
                    <h6>{e.artistName}</h6>
                </div>
                <div className="heart-icon">                    
                    <div className="outline-heart-icon"  onClick={e=>handleGiveLike(e.currentTarget)}>
                        <svg stroke="currentColor" fill="rose" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                        </svg>    
                    </div>
                    <div  className="fill-heart-icon disable "  onClick={e=>handleRemoveLike(e.currentTarget)}>
                        <svg stroke="currentColor" fill="rose" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                        </svg> 
                    </div>
                </div>
            </div>
        ))} 
    </div>
)
}
export default SongsResult