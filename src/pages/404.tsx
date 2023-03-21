import Image from "next/image";
import NotFoundPageStyled from "../styles/pages/NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled className="not-found-page">
      <section className="not-found-page__container">
        <Image
          src={"/img/brushbids-full-logo.webp"}
          alt="brushbids large logo"
          width={200}
          height={200}
          priority
          className="logo"
        ></Image>
        <h2 className="not-found-page__title">
          Sorry, the page you were looking for doesn’t exist at this URL.
        </h2>
        <div className="not-found-page__details">
          <h3>404</h3>{" "}
          <span>Please contact support@brushbids.com with any questions.</span>
        </div>
      </section>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
