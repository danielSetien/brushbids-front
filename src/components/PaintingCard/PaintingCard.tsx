import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { Painting } from "../../types/paintingTypes";
import Button from "../Button/Button";
import { ariaLabels } from "../../utils/componentUtils/componentUtils";
import PaintingCardStyled from "./PaintingCardStyled";
import Link from "next/link";

interface PaintingCardProps {
  painting: Painting;
}

const PaintingCard = ({
  painting: { image, name, id, author, year, price, bidCount, width, height },
}: PaintingCardProps): JSX.Element => {
  const { buttonEdit, buttonDelete } = ariaLabels;

  return (
    <>
      <Link href={`/paintings/${encodeURIComponent(id)}`}>
        <PaintingCardStyled key={id} role="listitem">
          <div className="image-container">
            <Image
              src={image}
              alt={name}
              width={width}
              height={height}
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
              icon={<TfiClose />}
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
          </section>
        </PaintingCardStyled>
      </Link>
    </>
  );
};

export default PaintingCard;
