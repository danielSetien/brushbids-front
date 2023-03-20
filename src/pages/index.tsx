import { GetStaticProps } from "next";
import PaintingsList from "../components/PaintingsList/PaintingsList";
import Header from "../components/Header/Header";
import HomePageStyled from "../styles/pages/HomePageStyled";
import { ToastContainer } from "react-toastify";
import { getPaintingsData } from "../utils/functionsUtils/functionUtils";
import { setupStore } from "../store";
import { loadPaintingsActionCreator } from "../store/features/paintingsSlice/paintingsSlice";

export const getStaticProps: GetStaticProps = async () => {
  const paintingsData = await getPaintingsData();

  const store = setupStore();
  await store.dispatch(loadPaintingsActionCreator(paintingsData));

  return {
    props: {
      initialState: store.getState(),
    },
  };
};

const HomePage = (): JSX.Element => {
  return (
    <>
      <HomePageStyled>
        <ToastContainer />
        <Header />
        <h3 className="section-title">All works from this auction</h3>
        <PaintingsList />
      </HomePageStyled>
    </>
  );
};

export default HomePage;
