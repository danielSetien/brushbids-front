import styled from "styled-components";

const CreateFormPageStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.large}) {
    min-width: 100vw;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.medium}) {
    min-width: 98vw;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.smallest}) {
    min-width: 91vw;
  }
`;

export default CreateFormPageStyled;
