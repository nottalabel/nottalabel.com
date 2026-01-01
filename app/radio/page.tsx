"use client"; 
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { CirclePlay, CircleStop, CirclePause, Volume2 } from "lucide-react";
import dynamic from "next/dynamic";

const ClientAnimation = dynamic(
    () => import("./animation"),
    { ssr: false }
);

function Radio() {
  const ic_addr = `https://radio.nottalabel.com`
  const [ playing, setPlaying ] = useState(false);
  const [ volume, setVolume ] = useState(0.5);
  const [ nowPlaying, setNowPlaying ] = useState("OFF AIR");
  const audioElement = useRef<HTMLAudioElement|null>(null);

    const updateInfo = async() => {
      console.log("Contacting Icecast server...")
      const data = await axios.get(`${ic_addr}/status-json.xsl`).then(res => res.data);
      if (!data.icestats.source) { 
        if (audioElement.current) {
          audioElement.current.pause();
          audioElement.current.currentTime = 0;
        }
        setNowPlaying("OFF AIR")
        return;
      }
      console.log("DATA: ", data);
      if (data.icestats.source.title !== nowPlaying)
        setNowPlaying(data.icestats.source.title);

    }

    useEffect(() => {
        if (!audioElement.current) return;
        audioElement.current.volume = volume;
    },[volume]);

  useEffect(() => {
    updateInfo();
    const intervalId = setInterval(updateInfo, 15000);
    return () => clearInterval(intervalId);
  }, []);
return (
    <div className="flex flex-col items-center font-[family-name:var(--font-radio-canada)]">
      <div className="flex flex-col items-center p-1">
        <div className="flex flex-col items-center">
            <ClientAnimation />
        </div>
        <div className="scroll-container flex flex-row">
          <p className="scrolling-text"> Currently Playing: {nowPlaying} </p>
        </div>
        <div className="flex flex-row m-auto">
          <audio ref={audioElement} src={`${ic_addr}/stream`} />
          <button className="cursor-pointer" onClick={() => { 
            if (audioElement.current && nowPlaying !== "OFF AIR") {
              setPlaying(prev => !prev); 
              audioElement.current.play();
            }
          }}>
          { playing ? (<CirclePause size={32} />) : (<CirclePlay size={32}/>) }
          </button>
          <button className="cursor-pointer" onClick={() => { 
            if (audioElement.current)
              setPlaying(false); 
              audioElement.current!.pause();
              audioElement.current!.currentTime = 0;
            }}>
            <CircleStop size={32}/>
          </button>
        </div>
        <div className="flex flex-row m-auto">
          <Volume2 className="p-1" size={32} />
          <input 
            className="m-auto p-1 bg-[#ededed] accent-[#ededed]" 
            type="range" 
            id="volume"
            min={0} 
            max={1} 
            step={0.1} 
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
          </div>
      </div>
    </div>
  );
}

export default Radio;
