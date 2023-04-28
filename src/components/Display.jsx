const Display = ({
  display1,
  display2,
  display3,
  movieList,
  backgroundList,
  actorsList,
}) => {
  if (display1 === true) {
    return (
      <div className="aMovie">
        <h2>{movieList[0]}</h2>
        <img src={backgroundList[0]} alt="movie cover" />
        <div>
          {actorsList[0].map((elem) => {
            return (
              <div className="actors">
                <p>{elem.name}</p>
                <img src={elem.picture} alt="actor face" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  if (display2 === true) {
    return (
      <div className="aMovie">
        <h2>{movieList[1]}</h2>
        <img src={backgroundList[1]} alt="movie cover" />
        <div>
          {actorsList[1].map((elem) => {
            return (
              <div className="actors">
                <p>{elem.name}</p>
                <img src={elem.picture} alt="actor face" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  if (display3 === true) {
    return (
      <div className="aMovie">
        <h2>{movieList[2]}</h2>
        <img src={backgroundList[2]} alt="movie cover" />
        <div>
          {actorsList[2].map((elem) => {
            return (
              <div className="actors">
                <p>{elem.name}</p>
                <img src={elem.picture} alt="actor face" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Display;
