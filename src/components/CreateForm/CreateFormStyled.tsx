import styled from "styled-components";

const CreateFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  align-self: center;

  .form {
    &__button {
      margin-bottom: 35px;
    }
  }

  .selector {
    border: none;
    margin-bottom: 0;

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

  .summary {
    height: 300px;

    padding: ${(props) => props.theme.input.paddingLeft};

    font-family: inherit;
    font-size: ${(props) => props.theme.input.fontSize};

    border: 1px solid ${(props) => props.theme.colors.grayscale.dark};

    ::placeholder {
      font-size: ${(props) => props.theme.fontSize.medium};
    }
  }

  .choose-image-button {
    width: 100px;
    height: 30px;
    border-radius: 0%;
    background-color: ${(props) => props.theme.colors.secondary};
    display: flex;
    align-items: center;
  }

  .faux-placeholder {
    font-size: ${(props) => props.theme.fontSize.medium};

    color: ${(props) => props.theme.colors.grayscale.darkest};

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.smallest}) {
    width: 500px;
  }
`;

export default CreateFormStyled;
