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
import pageUtils from "../../utils/pageUtils/pageUtils";

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
    revalidate: pageUtils.staticPages.revalidateSeconds,
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
            priority
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
            <span className="price">{`$${price}`}</span>
            <button className="button--secondary bid button">Bid</button>
          </section>
          <section className="detail__secondary-information characteristics">
            {summary && <p className="characteristics__summary">{summary}</p>}
            <ol className="characteristics__fields">
              {materials && (
                <li className="characteristics__field">Materials</li>
              )}
              {size && <li className="characteristics__field">Size</li>}
              {rarity && <li className="characteristics__field">Rarity</li>}
              {medium && <li className="characteristics__field">Medium</li>}
              {signature && (
                <li className="characteristics__field">Signature</li>
              )}
              {condition && (
                <li className="characteristics__field">Condition</li>
              )}

              {certificate && (
                <li className="characteristics__field">
                  Certificate of authenticity
                </li>
              )}

              {frame && <li className="characteristics__field">Frame</li>}
            </ol>
            <ol className="characteristics__values">
              {materials && (
                <li className="characteristics__value">{materials}</li>
              )}
              {size && <li className="characteristics__value">{size}</li>}
              {rarity && <li className="characteristics__value">{rarity}</li>}
              {medium && <li className="characteristics__value">{medium}</li>}
              {condition && (
                <li className="characteristics__value">{condition}</li>
              )}
              {signature && (
                <li className="characteristics__value">
                  {signature === "true"
                    ? feedbackUtils.paintings.signature.true
                    : feedbackUtils.paintings.signature.false}
                </li>
              )}
              {certificate && (
                <li className="characteristics__value">
                  {certificate === "true"
                    ? feedbackUtils.paintings.certificate.true
                    : feedbackUtils.paintings.certificate.false}
                </li>
              )}
              {frame && (
                <li className="characteristics__value">
                  {frame === "true"
                    ? feedbackUtils.paintings.frame.true
                    : feedbackUtils.paintings.frame.false}
                </li>
              )}
            </ol>
          </section>
        </div>
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
