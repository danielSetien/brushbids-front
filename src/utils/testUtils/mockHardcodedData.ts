import { Paintings } from "../../types/paintingTypes";

export const mockToken = "mockToken";

export const mockPaintings: Paintings = [
  {
    id: "1",
    author: "Mary Heilmann",
    name: "New Line Up",
    year: "2018",
    gallery: "Private collection",
    technique: "Oil on canvas",
    size: "40 x 50 in",
    medium: "Painting",
    materials: "Oil paint, canvas",
    unique: "true",
    certificate: "true",
    rarity: "unique",
    condition: "excellent",
    signature: "true",
    price: "28000",
    frame: "false",
    highlightOrder: "1",
    summary:
      "Colorful abstract painting with horizontal lines and curved shapes",
    image:
      "https://icqwpkxwddqofeibjqcj.supabase.co/storage/v1/object/public/paitings/newLineUp.png?t=2023-03-12T13%3A23%3A46.999Z",
    width: "300",
    height: "400",
  },
  {
    id: "2",
    author: "Charles Ray",
    name: "Untitled",
    year: "1991",
    gallery: "Museum of Modern Art, New York",
    technique: "Mixed media",
    size: "Dimensions variable",
    medium: "Oil on canvas",
    materials: "Oil paint, canvas",
    unique: "true",
    certificate: "true",
    rarity: "unique",
    condition: "excellet",
    signature: "true",
    price: "3000",
    frame: "false",
    highlightOrder: "1",
    summary: "Floral mural",
    image:
      "https://icqwpkxwddqofeibjqcj.supabase.co/storage/v1/object/public/paitings/charlesRayUntilted.png?t=2023-03-11T16%3A11%3A40.075Z",
    width: "300",
    height: "400",
  },
];
