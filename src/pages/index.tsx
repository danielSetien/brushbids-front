import PaintingsList from "../components/PaintingsList/PaintingsList";
import Header from "../components/Header/Header";
import HomePageStyled from "../styles/pages/HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <>
      <HomePageStyled>
        <Header />
        <h3 className="section-title">Other works from this auction</h3>
        <PaintingsList />
      </HomePageStyled>
    </>
  );
};

export default HomePage;
