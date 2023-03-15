import styled from "styled-components";

const LogButtonStyled = styled.div`
  width: 100%;
  order: -1;

  .button {
    margin-bottom: 20px;
    margin-top: 10px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.small}) {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    order: 1;
    flex: 1;
  }
`;

export default LogButtonStyled;
