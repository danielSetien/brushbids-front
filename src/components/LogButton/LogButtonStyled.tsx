import styled from "styled-components";

const LogButtonStyled = styled.div`
  width: 100%;
  order: -1;

  .button {
    width: 100%;

    padding: 12px;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.small}) {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    order: 1;
    flex: 1;

    .button {
      width: 200px;

      margin: 0;
    }
  }
`;

export default LogButtonStyled;
