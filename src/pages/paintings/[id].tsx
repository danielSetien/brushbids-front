import Header from "../../components/Header/Header";
import Image from "next/image";
import DetailPageStyled from "../../styles/pages/DetailPageStyled";
import { TbCertificate } from "react-icons/tb";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import {
  getDetailData,
  getPaintingsData,
} from "../../utils/functionsUtils/functionUtils";
import { GetStaticPaths, GetStaticProps } from "next";
import { Painting } from "../../types/paintingTypes";
import { store } from "../../store";
import { loadDetailActionCreator } from "../../store/features/paintingsSlice/paintingsSlice";

export const getStaticPaths: GetStaticPaths = async () => {
  const paintingsData = await getPaintingsData();

  const paths = paintingsData.map((painting) => {
    return {
      params: { id: painting.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id;
  const painting = await getDetailData(id as string);

  await store.dispatch(loadDetailActionCreator(painting));
  return {
    props: { painting },
  };
};

const DetailPage = (painting: { painting: Painting }): JSX.Element => {
  let {
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
  } = painting.painting;

  return (
    <DetailPageStyled className="detail">
      <div className="container">
        <Header />
        {image && (
          <Image
            src={image}
            alt={name}
            width={+width!}
            height={+height!}
            className="image"
          />
        )}
        <div className="detail__information-section">
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
            <span className="price">
              {price &&
                `$${price.toLocaleString()} ${
                  bidCount ? `(${bidCount} bids)` : ""
                }`}
            </span>
            <button className="button--secondary bid button">Bid</button>
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
        </div>
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
