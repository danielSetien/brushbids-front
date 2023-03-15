import { useEffect } from "react";
import { useRouter } from "next/router";
import usePaintings from "../../hooks/usePaintings/usePaintings";
import { useAppSelector } from "../../store/hooks";
import Header from "../../components/Header/Header";
import Image from "next/image";
import DetailPageStyled from "../../styles/pages/DetailPageStyled";
import { TbCertificate } from "react-icons/tb";
import { HiOutlinePaintBrush } from "react-icons/hi2";

const DetailPage = (): JSX.Element => {
  const { getDetail } = usePaintings();
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    getDetail(id! as string);
  }, [getDetail, id]);

  const {
    author,
    certificate,
    condition,
    frame,
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

  return (
    <>
      <DetailPageStyled className="detail">
        <Header />
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          className="image"
        />
        <section className="detail__information">
          <h2 className="title">{author}</h2>
          <h3 className="subtitle">
            <span className="italic">{name}</span>
            <span>, {year}</span>
          </h3>
          <span className="text--secondary">{technique}</span>
          <span className="text--secondary">{size}</span>
          {unique && (
            <span className="text--secondary">
              <HiOutlinePaintBrush className="icon" />
              Unique work
            </span>
          )}
          {certificate && (
            <span className="text--secondary">
              <TbCertificate className="icon" />
              Includes a Certificate of Authenticity
            </span>
          )}
          <span className="price">{`$${price.toLocaleString()} ${
            bidCount ? `(${bidCount} bids)` : ""
          }`}</span>
          <button className="button--secondary bid">Bid</button>
        </section>
        <section className="detail__secondary-information characteristics">
          <p className="characteristics__summary">{summary}</p>
          <ol className="characteristics__fields">
            <span className="characteristics__field">Materials</span>
            <span className="characteristics__field">Size</span>
            <span className="characteristics__field">Rarity</span>
            <span className="characteristics__field">Medium</span>
            <span className="characteristics__field">Condition</span>
            <span className="characteristics__field">Signature</span>
            <span className="characteristics__field">
              Certificate of authenticity
            </span>
            <span className="characteristics__field">Frame</span>
          </ol>
          <ol className="characteristics__values">
            <span className="characteristics__value">{materials}</span>
            <span className="characteristics__value">{size}</span>
            <span className="characteristics__value">{rarity}</span>
            <span className="characteristics__value">{medium}</span>
            <span className="characteristics__value">{condition}</span>
            <span className="characteristics__value">
              {signature ? "Is signed by the author" : "Is not signed"}
            </span>
            <span className="characteristics__value">
              {certificate
                ? "Includes a Certificate of Authenticity"
                : "Does not include a Certificate of Authenticity"}
            </span>
            <span className="characteristics__value">
              {frame ? "Is framed" : "Is not framed"}
            </span>
          </ol>
        </section>
      </DetailPageStyled>
    </>
  );
};

export default DetailPage;
