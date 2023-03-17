import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  input {
    font-size: ${(props) => props.theme.input.fontSize};

    border-bottom: 1px solid ${(props) => props.theme.colors.grayscale.dark};

    padding-bottom: ${(props) => props.theme.input.paddingBottom};
    padding-top: ${(props) => props.theme.input.paddingTop};
    padding-left: ${(props) => props.theme.input.paddingLeft};

    margin-top: ${(props) => props.theme.input.marginTop};
    margin-bottom: ${(props) => props.theme.input.marginBottom};

    ::placeholder {
      font-size: ${(props) => props.theme.fontSize.medium};
    }
  }

  label {
    font-size: ${(props) => props.theme.fontSize.bigger};

    margin-top: ${(props) => props.theme.label.marginTop};
    padding-bottom: ${(props) => props.theme.label.paddingBottom};
  }

  .form {
    &__button {
      width: 100%;
      background-color: ${(props) => props.theme.colors.secondary};

      color: ${(props) => props.theme.colors.primary};
      font-size: ${(props) => props.theme.fontSize.button};

      border-radius: ${(props) => props.theme.borderRadius.button};

      padding: 12px;
      margin-top: 35px;

      :disabled {
        background-color: ${(props) => props.theme.colors.grayscale.dark};
      }
    }
  }
`;

export default LoginFormStyled;
