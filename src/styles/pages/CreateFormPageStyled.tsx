import styled from "styled-components";

const CreateFormPageStyled = styled.div`
  width: 88vw;
  padding-left: ${(props) => props.theme.page.padding};
  padding-right: ${(props) => props.theme.page.padding};

  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.medium}) {
    min-width: 98vw;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.smallest}) {
    min-width: 96vw;
  }
`;

export default CreateFormPageStyled;
