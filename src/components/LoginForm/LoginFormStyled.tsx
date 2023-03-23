import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  .field {
    flex: 1;
  }

  .button--loading {
    background-color: ${(props) => props.theme.colors.accent};

    display: flex;
    justify-content: center;
  }

  .button__content {
    &--loading {
      width: fit-content;
      animation-name: spin;
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .button__content {
      &--loading {
        animation: none;
      }
    }
  }
`;

export default LoginFormStyled;
