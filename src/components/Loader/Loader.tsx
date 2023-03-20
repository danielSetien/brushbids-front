import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled className="progress-bar" aria-label="progress bar">
      <div>
        <div
          className="progress-bar__progress"
          aria-label="loading progress indicator"
        >
          {" "}
        </div>
      </div>
    </LoaderStyled>
  );
};

export default Loader;
