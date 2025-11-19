import './Controller.css'

function Controller({playFunction, imagePlay}) {
    return(
        <div className='controller-box'>

            <div className='progress-bar'></div>

            <div className='commands'>

                <img id='back' src="./images/back.png" alt="" />

                <img onClick={playFunction} id='play' src={imagePlay} alt="" />

                <img id='forward' src="./images/forward.png" alt="" />
            </div>
        </div>
    )
}

export default Controller