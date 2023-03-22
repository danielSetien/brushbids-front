import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { Painting } from "../../types/paintingTypes";
import Button from "../Button/Button";
import { ariaLabels } from "../../utils/componentUtils/componentUtils";
import PaintingCardStyled from "./PaintingCardStyled";
import Link from "next/link";
import usePaintings from "../../hooks/usePaintings/usePaintings";
import { useAppSelector } from "../../store/hooks";

interface PaintingCardProps {
  painting: Painting;
  loading: "eager" | "lazy";
  index: number;
}

const PaintingCard = ({
  painting: { image, name, id, author, year, price, bidCount, width, height },
  loading,
  index,
}: PaintingCardProps): JSX.Element => {
  const { buttonEdit, buttonDelete } = ariaLabels;
  const { deletePainting } = usePaintings();
  const { administrator } = useAppSelector((state) => state.user);

  return (
    <>
      <PaintingCardStyled key={id} role="listitem">
        <div className="image-container">
          {id && (
            <Link
              href={`/paintings/${encodeURIComponent(id)}`}
              className="link"
            >
              <Image
                src={image}
                alt={name}
                width={+width!}
                height={+height!}
                className="image"
                loading={loading}
                priority={index === 1}
              />
            </Link>
          )}
          {administrator && (
            <>
              <Button
                className="button edit"
                ariaLabel={buttonEdit}
                icon={<MdEdit />}
                disabled={false}
                action={() => {}}
              />
              <Button
                className="button delete"
                ariaLabel={buttonDelete}
                icon={<TfiClose />}
                disabled={false}
                action={() => deletePainting(id)}
              />
            </>
          )}
        </div>

        <section className="about">
          <Link href={`/paintings/${encodeURIComponent(id)}`}>
            <div className="information">
              <span className="information__author">{author}</span>
              <span className="information__name-and-year">{`${name}, ${year}`}</span>
              <span className="information__price-and-bids">
                {price &&
                  `$${price.toLocaleString()} ${
                    bidCount ? `(${bidCount} bids)` : ""
                  }`}
              </span>
            </div>
          </Link>
        </section>
      </PaintingCardStyled>
    </>
  );
};

export default PaintingCard;
