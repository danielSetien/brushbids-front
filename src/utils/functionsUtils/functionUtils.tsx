import { BackPaintingsResponse } from "../../hooks/usePaintings/types";
import { Paintings } from "../../types/paintingTypes";
import definedResponses from "../responseUtils/responseUtils";

const getPaintingsData = async (): Promise<Paintings> => {
  const response = await fetch(
    "https://dani-setien-final-project-back-202301-bcn.onrender.com/paintings"
  );

  if (!response.ok) {
    throw new Error(definedResponses.internalServerError.message);
  }

  const { paintings } = (await response.json()) as BackPaintingsResponse;

  return paintings;
};

export default getPaintingsData;
