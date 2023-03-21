import { GetStaticProps } from "next";
import PaintingsList from "../components/PaintingsList/PaintingsList";
import HomePageStyled from "../styles/pages/HomePageStyled";
import { ToastContainer } from "react-toastify";
import { getPaintingsData } from "../utils/functionsUtils/functionUtils";

export const getStaticProps: GetStaticProps = async () => {
  const paintingsData = await getPaintingsData();

  return {
    props: {
      paintingsData,
    },
    revalidate: 1,
  };
};

const HomePage = (): JSX.Element => {
  return (
    <>
      <HomePageStyled>
        <ToastContainer />
        <h3 className="section-title">All works from this auction</h3>
        <PaintingsList />
      </HomePageStyled>
    </>
  );
};

export default HomePage;
