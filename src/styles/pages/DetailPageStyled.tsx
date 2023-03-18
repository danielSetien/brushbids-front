import styled from "styled-components";

const DetailPageStyled = styled.main`
  padding-left: ${(props) => props.theme.page.padding};
  padding-right: ${(props) => props.theme.page.padding};

  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;
  }
  .image {
    margin-top: 10px;
    margin-bottom: 30px;

    width: 100%;
    object-fit: contain;
    height: fit-content;
  }

  .title {
    font-size: ${(props) => props.theme.fontSize.title};
    line-height: ${(props) => props.theme.lineHeight.title};
  }

  .subtitle {
    font-size: ${(props) => props.theme.fontSize.large};
    margin-bottom: ${(props) => props.theme.margin.titleBottom};
    color: ${(props) => props.theme.colors.grayscale.darkest};
    font-weight: ${(props) => props.theme.fontWeight.lighter};
  }

  .text--secondary {
    font-weight: ${(props) => props.theme.fontWeight.primary};
    color: ${(props) => props.theme.colors.grayscale.darkest};
    font-size: ${(props) => props.theme.fontSize.bigger};
    font-weight: ${(props) => props.theme.fontWeight.lighter};

    display: inline-block;
    width: 100%;

    margin-bottom: 9px;
  }

  .price {
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.colors.secondary};
  }

  .bid {
    margin-top: 20px;
    margin-bottom: 40px;
    width: 100%;
  }

  .italic {
    font-style: italic;
  }

  .icon {
    margin-right: 10px;
    color: ${(props) => props.theme.colors.secondary};
  }

  .detail__secondary-information {
    display: none;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.smallest}) {
    flex-wrap: wrap;

    .container {
      justify-content: center;
    }

    .image {
      width: 480px;
    }

    .detail {
      &__information-section {
      }

      &__information {
        display: flex;
        flex-direction: column;

        width: 480px;
      }

      &__secondary-information {
        display: inline-block;
        width: 480px;
      }
    }

    .characteristics {
      display: flex;
      flex-wrap: wrap;

      margin-bottom: 40px;

      &__summary {
        border: 1px solid ${(props) => props.theme.colors.grayscale.gray};

        padding: ${(props) => props.theme.margin.titleBottom};
        margin: 0;
        margin-top: ${(props) => props.theme.margin.titleBottom};
        border-bottom: none;

        width: 480px;
      }

      &__fields {
        display: flex;
        flex-direction: column;

        border: 1px solid ${(props) => props.theme.colors.grayscale.gray};
        border-right: none;

        padding: ${(props) => props.theme.margin.titleBottom};
        width: 180px;
      }

      &__field {
        margin-top: ${(props) => props.theme.margin.titleBottom};
        margin-right: ${(props) => props.theme.margin.titleBottom};
      }

      &__values {
        display: flex;
        flex-direction: column;

        color: ${(props) => props.theme.colors.grayscale.darkest};

        border: 1px solid ${(props) => props.theme.colors.grayscale.gray};
        border-left: none;

        padding: ${(props) => props.theme.margin.titleBottom};
        width: 300px;
      }

      &__value {
        margin-top: ${(props) => props.theme.margin.titleBottom};
        margin-right: ${(props) => props.theme.margin.titleBottom};
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .detail {
      &__information-section {
        margin-left: 68px;
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.medium}) {
    .container {
      justify-content: space-between;
    }
  }
`;

export default DetailPageStyled;
