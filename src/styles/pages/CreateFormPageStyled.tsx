import styled from "styled-components";

const CreateFormPageStyled = styled.div`
  min-width: 92vw;

  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.medium}) {
    min-width: 98vw;
  }
`;

export default CreateFormPageStyled;
