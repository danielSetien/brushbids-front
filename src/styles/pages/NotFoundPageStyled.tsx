import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  width: ${(props) => props.theme.page.width};

  padding-left: ${(props) => props.theme.page.padding};
  padding-right: ${(props) => props.theme.page.padding};

  display: flex;
  flex-direction: column;

  .logo {
    margin-top: 10px;
    margin-bottom: 10px;
    align-self: center;
  }

  .not-found-page {
    &__container {
      max-width: 430px;
      align-self: center;
      display: flex;
      flex-direction: column;
    }

    &__title {
      margin-bottom: ${(props) => props.theme.margin.titleBottom};
    }

    &__details {
      font-weight: ${(props) => props.theme.fontWeight.primary};
      color: ${(props) => props.theme.colors.grayscale.darkest};
    }
  }
`;

export default NotFoundPageStyled;
