import PaintingsList from "../components/PaintingsList/PaintingsList";
import HomePageStyled from "../styles/pages/HomePageStyled";
import { ToastContainer } from "react-toastify";

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
