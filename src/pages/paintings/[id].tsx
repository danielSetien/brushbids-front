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
import feedbackUtils from "../../utils/feedbackUtils/feedbackUtils";

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

  store.dispatch(loadDetailActionCreator(painting));
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
                  bidCount !== "0" && `(${bidCount} bids)`
                }`}
            </span>
            <button className="button--secondary bid button">Bid</button>
          </section>
          <section className="detail__secondary-information characteristics">
            <p className="characteristics__summary">{summary}</p>
            <ol className="characteristics__fields">
              <li className="characteristics__field">Materials</li>
              <li className="characteristics__field">Size</li>
              <li className="characteristics__field">Rarity</li>
              <li className="characteristics__field">Medium</li>
              <li className="characteristics__field">Condition</li>
              <li className="characteristics__field">Signature</li>
              <li className="characteristics__field">
                Certificate of authenticity
              </li>
              <li className="characteristics__field">Frame</li>
            </ol>
            <ol className="characteristics__values">
              <li className="characteristics__value">{materials}</li>
              <li className="characteristics__value">{size}</li>
              <li className="characteristics__value">{rarity}</li>
              <li className="characteristics__value">{medium}</li>
              <li className="characteristics__value">{condition}</li>
              <li className="characteristics__value">
                {signature === "yes"
                  ? feedbackUtils.paintings.signature.true
                  : feedbackUtils.paintings.signature.false}
              </li>
              <li className="characteristics__value">
                {certificate === "yes"
                  ? feedbackUtils.paintings.certificate.true
                  : feedbackUtils.paintings.certificate.false}
              </li>
              <li className="characteristics__value">
                {frame === "yes"
                  ? feedbackUtils.paintings.frame.true
                  : feedbackUtils.paintings.frame.false}
              </li>
            </ol>
          </section>
        </div>
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
