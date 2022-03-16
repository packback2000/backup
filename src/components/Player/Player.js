import React from "react";
import "../../styles/styles.css"
import Play from "../../Assets/Icons/play.svg";
import FullScreen from "../../Assets/Icons/fullscreen.svg";
import Volume from "../../Assets/Icons/volume_up.svg";
import VolumeOff from "../../Assets/Icons/volume_off.svg";
import Scrubber from "../../Assets/Icons/scrub.svg";
import { useRef } from "react";
import Pause from "../../Assets/Icons/pause.svg";
import {useState} from "react";
import { Link } from "react-router-dom";

function Player(props) {
    const videoRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [sound, setSound] = useState(false);
    const [videoTime, setVideoTime] = useState(0);

    const videoPlayerFunction = (controls) => {
        if (controls === "play") {
            videoRef.current.play();
            setPlaying(true);
            let vid = document.getElementById(props.currentVideoDetails.id);
            setVideoTime(vid.duration);
        } else if (controls === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }
    }

    const videoSoundFunction = (sound) => {
        if (sound === "on") {
            videoRef.current.on();
            setSound(true);
        } else if (sound === "off") {
            videoRef.current.off();
            setSound(false);
        }
    }
    return(
        <Link to={`/videos/84e96018-4022-434e-80bf-000ce4cd12b8`}>
        <section className="main-video" key={props.currentVideoDetails.id} id={props.currentVideoDetails.id}>
            <div className="video-container">
            <video
                ref={videoRef}
                src = {props.video}
                poster={props.currentVideoDetails.image}
                className="main-video__video"
                id={props.currentVideoDetails.id}
            >   
                <source src={props.currentVideoDetails.video} />
            </video>
            <div className="video-controls__container">
                    <div className="controls">         
                        <div className="video-controls__time">
                       
                       {playing ? (
                           <img
                            onClick={() => videoPlayerFunction("pause")}
                            className="controls-icon"
                            alt=""
                            src={Pause}
                            />
                       ) : (
                        <img 
                            className="controls-icon" 
                            alt="" 
                            src={Play}
                            onClick={() => videoPlayerFunction("play")}
                        />
                       )}
                        
                        <div className="video-time__progressbar-container">
                            <img src={Scrubber} alt="" className="progressbar" /> 
                            <p className="video-time">
                                0:00 - 4:10
                            </p>
                        </div>
                       
                        <img className="controls-icon" alt="" src={FullScreen}/>

                        {sound ? (
                            <img 
                                className="controls-icon" 
                                alt="" 
                                src={Volume}
                                onClick={() => videoSoundFunction("on")}
                            />
                        ) : (
                            <img 
                                className="controls-icon"
                                alt=""
                                src={VolumeOff}
                                onClick = {() => videoSoundFunction("off")}
                            />
                        )}
                        
                    </div>
                </div>
                </div>
            </div>
           </section>
           </Link>
    )
}
export default Player;
