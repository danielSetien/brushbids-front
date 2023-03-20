import Masonry from "react-masonry-css";
import PaintingCard from "../PaintingCard/PaintingCard";
import { useAppSelector } from "../../store/hooks";
import { masonryBreakpoints } from "../../utils/stylesUtils/breakpoints";
import PaintingsListStyled from "./PaintingsListStyled";

const PaintingsList = (): JSX.Element => {
  const paintings = useAppSelector((state) => state.paintings.paintings);

  return (
    <>
      {paintings && (
        <PaintingsListStyled>
          <Masonry
            breakpointCols={masonryBreakpoints}
            className="paintings"
            columnClassName="paintings__column"
            role="list"
            aria-label="list"
          >
            {paintings.map((painting, index) => (
              <PaintingCard
                painting={painting}
                key={painting.id}
                loading={index < 9 ? "eager" : "lazy"}
              />
            ))}
          </Masonry>
        </PaintingsListStyled>
      )}
    </>
  );
};

export default PaintingsList;
