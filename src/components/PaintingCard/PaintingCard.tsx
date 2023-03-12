import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { Painting } from "../../types/paintingTypes";
import Button from "../Button/Button";
import { ariaLabels } from "../../utils/componentUtils/componentUtils";
import PaintingCardStyled from "./PaintingCardStyled";

interface PaintingCardProps {
  painting: Painting;
}

const PaintingCard = ({
  painting: { image, name, id, author, year, price, bidCount },
}: PaintingCardProps): JSX.Element => {
  const { buttonEdit, buttonDelete } = ariaLabels;

  return (
    <PaintingCardStyled key={id}>
      <div className="image-container">
        <Image
          src={image}
          alt={name}
          width={320}
          height={400}
          className="image-container__image"
        />
        <Button
          className="button edit"
          ariaLabel={buttonEdit}
          icon={<MdEdit />}
          disabled={false}
        />
        <Button
          className="button delete"
          ariaLabel={buttonDelete}
          icon={<GrClose />}
          disabled={false}
        />
      </div>
      <section className="about">
        <div className="information">
          <span className="information__author">{author}</span>
          <span className="information__name-and-year">{`${name}, ${year}`}</span>
          <span className="information__price-and-bids">{`$${price} ${
            bidCount ? `(${bidCount} bids)` : ""
          }`}</span>
        </div>
        <CiHeart className="favorites-icon" aria-label="favorites" />
      </section>
    </PaintingCardStyled>
  );
};

export default PaintingCard;