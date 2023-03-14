import { useEffect } from "react";
import { useRouter } from "next/router";
import usePaintings from "../../hooks/usePaintings/usePaintings";
import { useAppSelector } from "../../store/hooks";
import Header from "../../components/Header/Header";
import Image from "next/image";

const DetailPage = (): JSX.Element => {
  const { getDetail } = usePaintings();
  const {
    author,
    certificate,
    condition,
    frame,
    gallery,
    height,
    image,
    materials,
    medium,
    name,
    price,
    rarity,
    signature,
    size,
    summary,
    technique,
    unique,
    width,
    year,
    bidCount,
  } = useAppSelector((state) => state.paintings.paintingDetail);

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    getDetail(id! as string);
  }, [getDetail, id]);

  return (
    <>
      <Header />
      <main className="detail">
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          className="image-container__image"
        />
        <section className="detail__primary-information">
          <h2>{author}</h2>
          <h3>{`${name}, ${year}`}</h3>
          <span>{technique}</span>
          <span>{size}</span>
          <span>{unique}</span>
          <span>{certificate}</span>
          <span>{`$${price}`}</span>
          <button className="button--secondary">Bid</button>
        </section>
        <section className="detail__secondary-information">
          <p className="detail__summary">{summary}</p>
          <ul>
            <li className="list-item">
              <span className="field">Materials</span>
              <span className="value">{materials}</span>
            </li>

            <li className="list-item">
              <span className="field">Size</span>
              <span className="value">{size}</span>
            </li>

            <li className="list-item">
              <span className="field">Rarity</span>
              <span className="value">{rarity}</span>
            </li>

            <li className="list-item">
              <span className="field">Medium</span>
              <span className="value">{medium}</span>
            </li>

            <li className="list-item">
              <span className="field">Condition</span>
              <span className="value">{condition}</span>
            </li>

            <li className="list-item">
              <span className="field">Signature</span>
              <span className="value">{signature}</span>
            </li>

            <li className="list-item">
              <span className="field">Certificate of authenticity</span>
              <span className="value">{certificate}</span>
            </li>

            <li className="list-item">
              <span className="field">Frame</span>
              <span className="value">{frame}</span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default DetailPage;
