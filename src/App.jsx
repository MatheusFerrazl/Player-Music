import { useRef, useState, useEffect } from "react";
import Content from "./components/content";
import Controller from "./components/Controller";
import AllSongs from "./components/AllSongs";
import Song from "./components/Song";
import "./App.css";
import { playList } from "./playList";

function App() {
  // useState para setar a música nova que irá tocar
  const [currentSong, setCurrentSong] = useState(playList[0]);

  // Para acessar o elemento áudio com audioTag.current
  const audioTag = useRef();

  // state que salvará o caminho da imagem atual
  const [randomState, setRandomState] = useState(false);

  const isFirstMusic = useRef(true);

  useEffect(() => {
    if (isFirstMusic.current === true) {
      isFirstMusic.current = false;

      return;
    }
    audioTag.current.play();
  }, [currentSong]);

  function backMusic() {
    const backIndex =
      currentSong.id === 0 ? playList.length - 1 : currentSong.id - 1;

    setCurrentSong(playList[backIndex]);
  }

  function forwardMusic() {
    let index = null;
    if (randomState) {
      index = getSafeRandomIndex();
    } else if (currentSong.id === playList.length - 1) {
      index = 0;
    } else {
      index = currentSong.id + 1;
    }

    setCurrentSong(playList[index]);
  }

  function toggleRandomMode() {
    setRandomState(!randomState);
  }

  function getSafeRandomIndex() {
    const index = Math.floor(Math.random() * playList.length);
    if (index === currentSong.id) {
      return getSafeRandomIndex();
    } else {
      return index;
    }
  }

  return (
    <div className="app-container">
      <Content currentSong={currentSong} />

      <Controller
        toggleRandomMode={toggleRandomMode}
        isRandomMode={randomState}
        onNext={forwardMusic}
        onPrevious={backMusic}
      >
        <audio
          onEnded={forwardMusic}
          className="audio-tag"
          autoPlay={false}
          controls
          ref={audioTag}
          src={currentSong.song}
        >
          Seu browser não suporta audio
        </audio>
      </Controller>

      <h1 className="all-song-title">All songs</h1>

      <AllSongs>
        {playList.map((songItem) => (
          <Song
            key={songItem.id}
            currentSong={songItem}
            onSelectMusic={() => {
              audioTag.current.pause();
              audioTag.current.currentTime = 0;
              setCurrentSong(songItem);
            }}
          />
        ))}
      </AllSongs>
    </div>
  );
}

export default App;
