import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Painting,
  Paintings,
  PaintingsState,
} from "../../../types/paintingTypes";

const initialPaintingDetail: Painting = {
  id: "",
  author: "",
  name: "",
  year: "",
  gallery: "",
  technique: "",
  size: "",
  medium: "",
  materials: "",
  unique: "",
  certificate: "",
  rarity: "",
  condition: "",
  signature: "",
  price: "",
  frame: "",
  highlightOrder: "",
  summary: "",
  image: "",
  width: "",
  height: "",
  bidCount: "",
};

const initialPaintings = [] as Paintings;

export const initialPaintingsState: PaintingsState = {
  paintings: initialPaintings,
  paintingDetail: initialPaintingDetail,
};

const paintingsSlice = createSlice({
  name: "paintings",
  initialState: initialPaintingsState,
  reducers: {
    loadPaintings: (
      currentPaintingsState: PaintingsState,
      action: PayloadAction<Paintings>
    ): PaintingsState => ({
      ...currentPaintingsState,
      paintings: [...action.payload],
    }),

    deletePainting: (
      currentPaintingsState: PaintingsState,
      action: PayloadAction<string>
    ): PaintingsState => ({
      ...currentPaintingsState,
      paintings: [
        ...currentPaintingsState.paintings.filter(
          (painting) => painting.id !== action.payload
        ),
      ],
    }),

    loadDetail: (
      currentPaintingsState: PaintingsState,
      action: PayloadAction<Painting>
    ): PaintingsState => ({
      ...currentPaintingsState,
      paintingDetail: { ...action.payload },
    }),

    createPainting: (
      currentPaintingsState: PaintingsState,
      action: PayloadAction<Painting>
    ): PaintingsState => ({
      ...currentPaintingsState,
      paintings: [...currentPaintingsState.paintings, action.payload],
    }),
  },
});

export const {
  loadPaintings: loadPaintingsActionCreator,
  loadDetail: loadDetailActionCreator,
  deletePainting: deletePaintingActionCreator,
  createPainting: createPaintingActionCreator,
} = paintingsSlice.actions;

export const paintingsReducer = paintingsSlice.reducer;
