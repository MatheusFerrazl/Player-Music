import './Content.css'

function Content({image, nameTitle, nameAuthor}) {


    return(
    <>
    <h1 className="title">Player</h1>
       <div className="image-box">
       <img className='image-cover' src={image} alt="" />
       <p className='name-song'>{nameTitle}</p>
       <p className='author-song'>{nameAuthor}</p>
        </div>
    </> 
    )

}

export default Content