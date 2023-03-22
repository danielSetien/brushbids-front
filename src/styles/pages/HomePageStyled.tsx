import styled from "styled-components";

const HomePageStyled = styled.div`
  padding-left: ${(props) => props.theme.page.padding};
  padding-right: ${(props) => props.theme.page.padding};

  .section-title {
    font-size: 24px;
  }
`;

export default HomePageStyled;
