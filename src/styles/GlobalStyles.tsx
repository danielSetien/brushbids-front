import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
  }

  h1, h2, h3 {
    font-weight: normal;
    
    margin: 0;
  }

  ul, ol, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  button, input {
    font-family: inherit;
    font-size: inherit;
    border: none;
  }

  .button {
    cursor: pointer;

    width: 100%;

    padding: 12px;

    font-size: ${(props) => props.theme.fontSize.button};
    border-radius: ${(props) => props.theme.borderRadius.button};

    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
  }

  .button--secondary {
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.primary};

    border: 1px solid ${(props) => props.theme.colors.secondary};
  }

  a, a:active, a:visited {
    color: inherit;
    text-decoration: none;
  }

  html {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  }

  .toast-error {
    background-color: ${(props) => props.theme.colors.modalError};
    color: ${(props) => props.theme.colors.secondary};
  }

  .toast-sucess {
    background-color: ${(props) => props.theme.colors.modalSuccess} !important;
    color: ${(props) => props.theme.colors.secondary} ;
  }

  .field {
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
  
  @media screen and (min-width: ${(props) => props.theme.breakpoint.small}) {
    .button {
      width: 200px;
      margin: 0;
    }
  }
`;

export default GlobalStyles;
