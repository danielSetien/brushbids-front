import styled from "styled-components";

const PaintingsListStyled = styled.section`
  .paintings {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    margin-left: -30px;

    &__column {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-left: 30px;
      margin-bottom: 30px;
    }
  }
`;

export default PaintingsListStyled;
