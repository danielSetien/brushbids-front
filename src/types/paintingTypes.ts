import PaintingsList from "../components/PaintingsList/PaintingsList";

export interface Painting {
  id: string;
  author: string;
  name: string;
  year: string;
  gallery: string;
  technique: string;
  size: string;
  medium: string;
  materials: string;
  unique: boolean;
  certificate: boolean;
  rarity: string;
  condition: string;
  signature: boolean;
  price: number;
  frame: boolean;
  highlightOrder: number;
  summary: string;
  image: string;
  width: number;
  height: number;
  bidCount?: number;
}

export type Paintings = Painting[];

export interface PaintingsState {
  paintings: Paintings;
  paintingDetail: Painting;
}
