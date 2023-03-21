import styled from "styled-components";

const CreateFormPageStyled = styled.div`
  min-width: 95vw;

  padding-left: ${(props) => props.theme.page.padding};
  padding-right: ${(props) => props.theme.page.padding};

  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.medium}) {
    min-width: 97vw;
  }
`;

export default CreateFormPageStyled;
