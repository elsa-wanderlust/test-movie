const FirstStep = ({
  movieList,
  //   display1,
  setDisplay1,
  //   display2,
  setDisplay2,
  //   display3,
  setDisplay3,
}) => {
  return (
    <div className="selection">
      <h1>Choose your movie</h1>
      <div className="buttons">
        <button
          onClick={() => {
            setDisplay1(true);
            setDisplay2(false);
            setDisplay3(false);
          }}
        >
          {movieList[0]}
        </button>
        <button
          onClick={() => {
            setDisplay1(false);
            setDisplay2(true);
            setDisplay3(false);
          }}
        >
          {movieList[1]}
        </button>
        <button
          onClick={() => {
            setDisplay1(false);
            setDisplay2(false);
            setDisplay3(true);
          }}
        >
          {movieList[2]}
        </button>
      </div>
    </div>
  );
};
export default FirstStep;
