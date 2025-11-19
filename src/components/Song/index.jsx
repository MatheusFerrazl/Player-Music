import "./Song.css"

function Song({currentSongState, cover, songName, selectedMusic }) {

    return (
        <div className='item'>
            <img onClick={selectedMusic} className="images-box" src={cover} alt="" />
            <p>{songName}</p>
        </div>
    )
}

export default Song