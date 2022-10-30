import {useEffect} from 'react'
import {useState} from 'react'
import '../index.css';


export default function MusicBox(props){

    const [playing, setPlaying]=useState(false);

    const play=()=>{
        setPlaying(true);
        new Audio(props.sound).play();
        setTimeout(() => {
            setPlaying(false);
        }, 150);
    }

    useEffect(()=>{
        document.addEventListener("keydown", (e)=>{
            if(e.key.toLowerCase()===props.letter.toLowerCase())
            {
                play();
            }
        })
    },[])
    return(
        <div className={`drum ${playing?"playing":""}`} style={{backgroundImage: `url(${props.Image})`}} onClick={play}>{props.letter}</div>
    );

}