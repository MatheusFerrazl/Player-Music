import { useRef, useState, useEffect } from 'react'
import Content from './components/content'
import Controller from './components/Controller'
import AllSongs from './components/AllSongs'
import Song from './components/Song'
import './App.css'






function App() {

  const playList = [{
    id: 0,
    name: "Smells like teen spirit",
    author: "Nirvana",
    song: "./songs/Smells like teen spirit.mp3",
    image: "./images/Smells like teen spirit.jpg",
    style: "Alternative Rock"
  },

  {
    id: 1,
    name: "Boys don't cry",
    author: "The Cure",
    song: "./songs/Boys don't cry.mp3",
    image: "./images/Boys don't cry.jpg",
    style: "Alternative Rock",
  },

  {
    id: 2,
    name: "Creep",
    author: "RadioHead",
    song: "./songs/Creep.mp3",
    image: "./images/Creep.jpg",
    style: "Alternative Rock",
  },

  {
    id: 3,
    name: "One",
    author: "Metallica",
    song: "./songs/One.mp3",
    image: "./images/One.jpg",
    style: "Heavy Metal",
  },

  {
    id: 4,
    name: "Fade to black",
    author: "Metallica",
    song: "./songs/Fade to black.mp3",
    image: "./images/Fade to black.jpg",
    style: "Heavy Metal"
  },

  {
    id: 5,
    name: "Unforgiven",
    author: "Metallica",
    song: "./songs/Unforgiven.mp3",
    image: "./images/Unforgiven.jpg",
    style: "Heavy Metal",
  },

  {
    id: 6,
    name: "So tell me tell me",
    author: "Shavone",
    song: "./songs/So tell me tell me.mp3",
    image: "./images/So tell me tell me.jpg",
    style: "90 hits",
  },

  {
    id: 7,
    name: "Forever and always",
    author: "Nyasia",
    song: "./songs/Forever and always.mp3",
    image: "./images/Forever and always.jpg",
    style: "90 hits",
  },

  {
    id: 8,
    name: "Rhythm is a dancer",
    author: "Snap",
    song: "./songs/Rhythm is a dancer.mp3",
    image: "./images/Rhythm is a dancer.jpg",
    style: "90 hits"
  },

  {
    id: 9,
    name: "In the end",
    author: "Linkin Park",
    song: "./songs/In the end.mp3",
    image: "./images/In the end.jpg",
    style: "Nu Metal"
  }
  ]

  // useState para setar a música nova que irá tocar  
  const [currentSong, setCurrentSong] = useState({
    songIndex: playList[0].id,
    songCurrent: playList[0].song,
    songImage: playList[0].image,
    nameTitle: playList[0].name,
    nameAuthor: playList[0].author
  })


  // Para acessar o elemento áudio com audioTag.current 
  const audioTag = useRef()


  // useState para acessar a imagem se está no play ou está pausado
  const [imagePlay, setImagePlay] = useState("./images/play.png")


  // useState para mudar o valor da variável isPaused caso   
  const [isPaused, setIsPaused] = useState(true);


  // state que salvará o caminho da imagem atual
  const [randomState, setRandomState] = useState(false)


  function toggleRandomMode() {
    if (randomState === false) {
      setRandomState(randomState => true)
    } else {
      setRandomState(randomState => false)
    }
  }

  function randomMusicMode() {
   let randomNumber = Math.floor(Math.random() * playList.length)
    setCurrentSong(
      {
        songIndex: playList[randomNumber].id,
        songCurrent: playList[randomNumber].song,
        songImage: playList[randomNumber].image,
        nameTitle: playList[randomNumber].name,
        nameAuthor: playList[randomNumber].author
      })
  }

  const isFirstMusic = useRef(true)

  useEffect(() => {

    if (isFirstMusic.current === true) {
      isFirstMusic.current = false

      return
    }
    audioTag.current.play()

  }, [currentSong])

  function backMusic() {
    if (currentSong.songIndex === 0) {
      setCurrentSong({
        songIndex: playList[playList.length - 1].id,
        songCurrent: playList[playList.length - 1].song,
        songImage: playList[playList.length - 1].image,
        nameTitle: playList[playList.length - 1].name,
        nameAuthor: playList[playList.length - 1].author
      })

    } else {
      let indexMusic = currentSong.songIndex
      setCurrentSong({
        songIndex: playList[indexMusic - 1].id,
        songCurrent: playList[indexMusic - 1].song,
        songImage: playList[indexMusic - 1].image,
        nameTitle: playList[indexMusic - 1].name,
        nameAuthor: playList[indexMusic - 1].author
      })
    }
  }

  function forwardMusic() {
    if (currentSong.songIndex === (playList.length - 1)) {
      setCurrentSong({
        songIndex: playList[0].id,
        songCurrent: playList[0].song,
        songImage: playList[0].image,
        nameTitle: playList[0].name,
        nameAuthor: playList[0].author
      })

    } else {
      let indexMusic = currentSong.songIndex
      setCurrentSong({
        songIndex: playList[indexMusic + 1].id,
        songCurrent: playList[indexMusic + 1].song,
        songImage: playList[indexMusic + 1].image,
        nameTitle: playList[indexMusic + 1].name,
        nameAuthor: playList[indexMusic + 1].author
      })
    }
  }

   return (
    <div className="app-container">
      <Content
        image={currentSong.songImage}
        nameTitle={currentSong.nameTitle}
        nameAuthor={currentSong.nameAuthor}
      />
      <Controller
        functionRandomNumber={randomMusicMode}
        functionToggleRandomMode={toggleRandomMode}
        randomState={randomState}
        forwardFunction={forwardMusic}
        backFunction={backMusic}
        imagePlay={imagePlay}>
        <audio onEnded={forwardMusic} className='audio-tag' autoPlay={false} controls ref={audioTag} src={currentSong.songCurrent}></audio>
      </Controller>

      <h1 className='all-song-title'>All songs</h1>

      <AllSongs >
        {playList.map(songItem => (
          <Song
            key={songItem.id}
            cover={songItem.image}
            songName={songItem.name}
            authorName={songItem.author}
            selectedMusic={() => {
              audioTag.current.pause()
              audioTag.current.currentTime = 0
              setCurrentSong({
                songIndex: songItem.id,
                songCurrent: songItem.song,
                songImage: songItem.image,
                nameTitle: songItem.name,
                nameAuthor: songItem.author
              })
            }}
          />
        ))}
      </AllSongs>
    </div>
  )
}

export default App
