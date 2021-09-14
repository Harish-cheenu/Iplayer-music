import React from 'react'
import {useMenu,usePlaylist,usePlayPause} from "./Context"
import "../css/playerMenu.css"
// import {FaStepForward,FaStepBackward,FaPause,FaPlay,FaVolumeMute,FaVolumeDown,FaVolumeUp} from "react-icons/fa"
import ReactAudioPlayer from 'react-audio-player';

import Img from "../../Music_Icon.png"
const PlayerMenu = () => {
    const Theme = useMenu();
    const playlist = usePlaylist();
    const playPause = usePlayPause();

    // function play(){
       
    //     var song = new Audio("https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ac/a2/cc/aca2cc90-2246-bf21-172e-cdee7051aeb1/mzaf_4867663637856791696.plus.aac.p.m4a")
    //     song.play()
    //     console.log("playing...")
    // }
    // function pause(){

    // }

    return (
        <div  className={Theme?"player_Menu dark-mode":"player_Menu light-mode"}>
           {/* song detials */}
           <div className="song_info">
               {playlist.a.artworkUrl100?<img className="song_info--img" src={playlist.a.artworkUrl100} alt="description"/>:<img className="song_info--img" src={Img} alt="description"/>}
               <div className="song_info--text">
                    <h3 className="song_info--title">{playlist.a.trackName}</h3>
                    <h6 >{playlist.a.artistName}</h6>
               </div>
           </div>
           {/* {playPause.a?play:pause} */}
           <div className="song_control">
            <ReactAudioPlayer
             src={playlist.a.previewUrl}
             autoPlay
             controls
             play={playPause}
             />
           </div>
        </div>
    )
}
export default PlayerMenu;