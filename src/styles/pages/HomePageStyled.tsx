import styled from "styled-components";

const HomePageStyled = styled.div`
  min-width: 95.9vw;
  padding-left: ${(props) => props.theme.page.padding};
  padding-right: ${(props) => props.theme.page.padding};

  .section-title {
    font-size: 24px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.smallest}) {
    .section-title {
      font-size: 22px;
    }
  }
`;

export default HomePageStyled;
