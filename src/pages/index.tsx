import PaintingsList from "../components/PaintingsList/PaintingsList";
import HomePageStyled from "../styles/pages/HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <>
      <HomePageStyled className="page">
        <h3 className="section-title">All works from this auction</h3>
        <PaintingsList />
      </HomePageStyled>
    </>
  );
};

export default HomePage;
