import "./Song.css";

function Song({ currentSong: { image, name }, onSelectMusic }) {
  return (
    <div className="item">
      <img onClick={onSelectMusic} className="images-box" src={image} alt="" />
      <p>{name}</p>
    </div>
  );
}

export default Song;
