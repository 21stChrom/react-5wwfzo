

import React, { useState, useRef} from "react";

import AudioRecorder from "react-audio-recorder";

import AudioPlayer from "react-h5-audio-player";
import "styles.css";
import { FaPlay,
FaStop,
FaPause,
FaChevronLeft,
FaChevronRight, 
FaList, 
FaCog, 
FaExpand, 
FaCompres§  from "react-icons/fa"; 
import Track from "./Track";

const AudioRecorderApp = () => {

 const [isRecording, setlsRecording] = useState(false);

 const [isPaused, setlsPaused] = useState(false); const [audioList, setAudioList] = useState([]);

 const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

 const [isPiPActive, setlsPiPActive] = useState(false); 

 const audioPlayerRef = useRef(null);

 const audioPiPRef = useRef(null);

 const [PiPSize, setPiPSize] = useState("280px");

 const handleRecording = (data) =>{

 setlsRecording (false); 
 setAudioList([...audio list, data]);

 };

 const handlePlay = () => { audioPlayerRef.current && audioPlayerRef.current.play(); };

 const handlePause = () => { audioPlayerRef.current && audioPlayerRef.current.pause(); };

 const handleStop = () => audioPlayerRef.current && audioPlayerRef.current.pause(); audioPlayerRef.current && audioPlayerRef.current.setCurren tTime(0); };

 const handleSkipBackward = () => { audioPlayerRef.current && audioPlayerRef.current.backward (10);

 };

 const handleSkipForward = () => { audioPlayerRef.current && audi oPlayerRef.current.forward(10);
 };

 const handleSelectTrack =
 (index) => { setCurrentTrackIndex(index);
 };

 const handleSetActivePiP = (value) => { setlsPiPActive(value)
 };

 return (

 <div className="audio-recorder-app">

 <div className="audio-recorder-header">

 <button
 className="audio-recorder-header-button"

 onClick={ () =>

 setlsRecording(true))

 <FaPlay />

 </button>

 <button
 className="audio-recorder-header-button"

 onClick={ () => setlsPaused(!isPaused)}

 { isPaused? <FaPlay />

 <FaPause /> } 

 </button>

 <button

 className="audio-recorde

 r-header-button"

 onClick={ () => setlsRecording(false) }

 <FaStop />

 </button>

 <button

 className="audio-recorder-header-button" onClick={ () =>

 handleSkipBackward() } >

 <FaChevronLeft />

 </button>

 <button

 className="audio-recorder-header-button"

 onClick={ () => handleSkipForward() }

 <FaChevronRight />

 </button>

 <button

 className="audio-recorder-header-button" onClick={ () =>

 setCurrentTrackIndex(

 currentTrackIndex <

 audioList.length - 1

 ? currentTrackIndex + 1

 )} >

 <FaList />
  </button>

  </div>

  <div className="audio-recorder-controls" >
  </div>

  <div className="audio-recorder-player">

  {audioList.length > 0 && (

  <div className="audio-recorder-library">

  <button className="audio-recorder-library-button">

  <FaList/>

  </button>

  <button className="audio-recorder-settings-button">

  <FaCog />

  </button>

  <ul className="audio-recorder-track-list">



  { audioList.map((track, index) ( =>

  <Track

  key={audio-${index}}

  index={index}

  track={track}

  currentTrackIndex={currentTrackIndex}

  OnSelectTrack = { handleSelectTrack } />
   
   ))}
    </ul>
    </div>

    <div className="audio-recorder-playback">

    <div className="audio-recorder-playback-top">

    <AudioPlayer ref={ audioPlayerRef }

    autoPlayAfterSrcChange src={audioList[currentT rackIndex].blobURL}


     onEnded={ () => setCurrentTrackIndex(

     currentTrackIndex < audioList.length - 1 ? currentTrackIndex +1 : 0} />

     <button

     className="audio-recorder-pip-button"

     onClick={ () => handleSetActivePiP( !isPiPActive)} >

     {isPiPActive?

     <FaCompress /> : <FaExpand />}

     </button>

     </div>

     { isPiPActive && (

     <div

     className="audio-recorder-pip" ref={ audioPiPRef } style={{ width: piPSize,

     height: <PiPSize }}

     <AudioPlayer

     src={ audioList[current TrackIndex].blobURL } style={{ width: piPSize, height: piPSize }} />

     <div className="audio-recorder-pip-resizer">
     <span className="audio-recorder-pip-resizer-handle"

     onMouseDown={ b() =>

     handleSetPiPSize=("300px") } ></span>

     <span className="audio-recorder-pip-resizer-handle"

     onMouseDown={ () => handleSetPiPSize("280px") } ></span>

     <span className="audio-recorder-pip-resizer-handle" 

     On Mouse Down={ () => handleSetPiPSize("260px") } ></span>

     <span className="audio-recorder-pip-resizer-handle"

     onMouseDown={ () => handleSetPiPSize("240px") } ></span>

     </div> 
     </div>

     )} </div>

     </> )} </div> </div> ); };

     export default AudioRecorderApp
