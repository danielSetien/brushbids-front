import styled from "styled-components";

const CreateFormPageStyled = styled.main`
  display: flex;
  flex-direction: column;

  width: ${(props) => props.theme.width.page};
`;

export default CreateFormPageStyled;
