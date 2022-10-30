import { useState } from "react";
import MusicBox from "./musical-square";

export default function Orchesta(){
    const[sounds, setSounds]= useState([
        {
            name:"crash",
            sound:require("../assets/sounds/crash.mp3") ,
            background:require("../assets/images/crash.png"),
            key:"k"
        },
        {
            name:"violin",
            sound:require("../assets/sounds/violin.wav") ,
            background:require("../assets/images/violin.png"),
            key:"v"
        },
        {
            name:"guitar",
            sound:require("../assets/sounds/guitar.wav") ,
            background:require("../assets/images/guitar.png"),
            key:"g"
        },
        {
            name:"snare",
            sound:require("../assets/sounds/snare.mp3") ,
            background:require("../assets/images/snare.png"),
            key:"s"
        },
        {
            name:"piano",
            sound:require("../assets/sounds/piano-mp3_B2.mp3") ,
            background:require("../assets/images/piano.png"),
            key:"p"
        }
        
    
    ]);
    return(
        <div>
        {sounds.map((Sound)=>(
                <MusicBox letter={Sound.key} sound={Sound.sound} Image={Sound.background}/>
            ))}
        </div>);
}