import "./Content.css";

function Content({ currentSong: { image, name, author, style } }) {
  return (
    <>
      <h1 className="title">Player</h1>
      <div className="image-box">
        <img className="image-cover" src={image} alt="" />
        <p className="name-song">{name}</p>
        <p className="author-song">{author}</p>
        <p className="author-song">{style}</p>
      </div>
    </>
  );
}

export default Content;
