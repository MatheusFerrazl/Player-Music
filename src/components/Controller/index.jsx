import './Controller.css'

function Controller({playFunction, imagePlay, forwardFunction, backFunction}) {
    return(
        <div className='controller-box'>

            <div className='progress-bar'></div>

            <div className='commands'>

                <img id='back' onClick={backFunction} src="./images/back.png" alt="" />

                <img onClick={playFunction} id='play' src={imagePlay} alt="" />

                <img id='forward' onClick={forwardFunction} src="./images/forward.png" alt="" />
            </div>
        </div>
    )
}

export default Controller