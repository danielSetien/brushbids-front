import styled from "styled-components";

const PaintingCardStyled = styled.li`
  width: ${(props) => props.theme.cardPainting.width};

  white-space: nowrap;
  overflow: clip;

  margin-top: 35px;

  .link {
    width: 100%;
  }

  .image-container {
    display: flex;
    position: relative;

    .image {
      object-fit: contain;

      width: 100%;

      height: fit-content;
      z-index: -1;
    }

    .edit {
      position: absolute;
      top: ${(props) => props.theme.cardPainting.buttonDistanceToEdge};
      left: ${(props) => props.theme.cardPainting.buttonDistanceToEdge};
    }

    .delete {
      position: absolute;
      top: ${(props) => props.theme.cardPainting.buttonDistanceToEdge};
      right: ${(props) => props.theme.cardPainting.buttonDistanceToEdge};
    }
  }

  .button {
    width: ${(props) => props.theme.cardPainting.buttonWidthAndHeigth};
    height: ${(props) => props.theme.cardPainting.buttonWidthAndHeigth};
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
  }

  .information {
    background-color: ${(props) => props.theme.colors.primary};

    display: flex;
    flex-direction: column;
    overflow: clip;

    flex: 2;

    &__author {
      margin-top: ${(props) => props.theme.cardPainting.informationMarginTop};

      font-size: ${(props) => props.theme.cardPainting.fontSizeAuthor};
    }

    &__name-and-year {
      margin-top: ${(props) => props.theme.cardPainting.informationMarginTop};

      font-size: ${(props) => props.theme.cardPainting.fontSizeNameOfPainting};
    }

    &__price-and-bids {
      margin-top: ${(props) => props.theme.cardPainting.informationMarginTop};

      font-size: ${(props) => props.theme.cardPainting.fontSizePrice};
    }
  }

  .about {
    display: flex;
  }

  .favorites-icon {
    align-self: center;
    flex: 1;

    font-size: ${(props) => props.theme.cardPainting.fontSizeFavoriteIcon};
    color: ${(props) => props.theme.colors.grayscale.darkest};
  }

  .button {
    color: ${(props) => props.theme.colors.grayscale.darkest};
    font-size: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.medium}) {
    .button {
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    :hover .button {
      opacity: 1;
    }
  }
`;

export default PaintingCardStyled;
