import styled from "styled-components";

const HeaderStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;

  font-size: ${(props) => props.theme.fontSize.title};

  justify-content: space-between;

  margin-bottom: 30px;
  padding-top: 10px;
  padding-bottom: 20px;

  border-bottom: 1px solid ${(props) => props.theme.colors.grayscale.gray};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.small}) {
    .navigation-link {
      margin-left: 30px;
    }
  }
`;

export default HeaderStyled;
