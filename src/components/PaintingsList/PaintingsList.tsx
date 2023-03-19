import { useEffect } from "react";
import Masonry from "react-masonry-css";
import PaintingCard from "../PaintingCard/PaintingCard";
import usePaintings from "../../hooks/usePaintings/usePaintings";
import { useAppSelector } from "../../store/hooks";
import { masonryBreakpoints } from "../../utils/stylesUtils/breakpoints";
import PaintingsListStyled from "./PaintingsListStyled";

const PaintingsList = (): JSX.Element => {
  const { getPaintings } = usePaintings();
  const paintings = useAppSelector((state) => state.paintings.paintings);

  useEffect(() => {
    getPaintings();
  }, [getPaintings]);

  return (
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
  );
};

export default PaintingsList;
