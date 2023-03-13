import styled from "styled-components";

const HeaderStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  font-size: ${(props) => props.theme.fontSize.title};

  border-bottom: 1px solid ${(props) => props.theme.colors.grayscale.gray};

  justify-content: space-between;

  margin-bottom: 30px;
  padding-top: 10px;
  padding-bottom: 20px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.small}) {
    .navigation-link {
      margin-left: 30px;
    }
  }
`;

export default HeaderStyled;
