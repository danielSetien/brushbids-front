import styled from "styled-components";

const CreateFormPageStyled = styled.main`
  padding-left: ${(props) => props.theme.page.padding};
  padding-right: ${(props) => props.theme.page.padding};
  min-width: 95.9vw;

  display: flex;
  flex-direction: column;
`;

export default CreateFormPageStyled;
