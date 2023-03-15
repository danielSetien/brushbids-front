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
      >
        {paintings.map((painting) => (
          <PaintingCard painting={painting} key={painting.id} />
        ))}
      </Masonry>
    </PaintingsListStyled>
  );
};

export default PaintingsList;
