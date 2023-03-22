import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;

  .logo {
    align-self: center;

    margin-top: 10px;
    margin-bottom: 10px;
  }

  .login-page {
    &__container {
      max-width: 600px;
      align-self: center;
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-size: ${(props) => props.theme.fontSize.title};
      line-height: ${(props) => props.theme.lineHeight.title};

      margin-bottom: ${(props) => props.theme.margin.titleBottom};
    }
    &__register-text {
      align-self: center;

      font-weight: ${(props) => props.theme.fontWeight.primary};
      color: ${(props) => props.theme.colors.grayscale.darker};

      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
`;

export default LoginPageStyled;
