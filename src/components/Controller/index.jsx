import "./Controller.css";

function Controller({
  onNext,
  onPrevious,
  children,
  toggleRandomMode,
  isRandomMode,
}) {
  return (
    <div className="controller-box">
      <div className="commands">
        <div className="main-commands">
          <img
            className="button-controller"
            onClick={onPrevious}
            src="./images/back.png"
            alt=""
          />
          <div>{children}</div>
          <img
            className="button-controller"
            onClick={onNext}
            src="./images/forward.png"
            alt=""
          />
        </div>
        <img
          onClick={toggleRandomMode}
          className="button-controller-random"
          src={
            isRandomMode
              ? "./images/random-activated.png"
              : "./images/random.png"
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default Controller;
