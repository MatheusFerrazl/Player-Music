import './Controller.css'

function Controller({ forwardFunction, backFunction, children, functionToggleRandomMode, randomState, functionRandomNumber}) {
    return (
        <div className='controller-box'>

            <div className='commands'>
                <div className='main-commands'>
                    <img className='button-controller' onClick={backFunction} src="./images/back.png" alt="" />
                    <div>
                        {children}
                    </div>
                    <img className='button-controller' onClick={randomState ? functionRandomNumber : forwardFunction } src="./images/forward.png" alt="" />
                </div>
                <img onClick={functionToggleRandomMode} className='button-controller-random' src={randomState ? './images/random-activated.png' : './images/random.png'} alt="" />

            </div>

        </div>
    )
}

export default Controller