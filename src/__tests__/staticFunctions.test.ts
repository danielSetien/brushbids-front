import { GetStaticPropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

import {
  getStaticPaths,
  getStaticProps as getStaticPropsForDetail,
} from "../pages/paintings/[id]";
import pageUtils from "../utils/pageUtils/pageUtils";

import { mockPaintings } from "../utils/testUtils/mockHardcodedData";

jest.mock("../utils/functionsUtils/functionUtils", () => ({
  __esModule: true,
  getPaintingsData: jest.fn().mockReturnValue([
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
  ]),
  getDetailData: jest.fn().mockReturnValue({
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
  }),
}));

describe("Given a getStaticProps function that fetches a particular painting", () => {
  describe("When called", () => {
    test("Then it should return a props object with that particular painting", async () => {
      const expectedProps = {
        props: { painting: mockPaintings[0] },
        revalidate: pageUtils.staticPages.revalidateSeconds,
      };

      const context: GetStaticPropsContext<ParsedUrlQuery, PreviewData> = {
        params: {
          id: "irrelevant",
        },
      };

      const props = await getStaticPropsForDetail(context);

      expect(props).toStrictEqual(expectedProps);
    });
  });
});

describe("Given a getStaticPaths function that fetches the paths for a list of paintings", () => {
  describe("When called", () => {
    test("Then it should return a props object with the paths for that list of paintings", async () => {
      const expectedPaths = {
        paths: [{ params: { id: mockPaintings[0].id } }],
        fallback: "blocking",
      };

      const context: GetStaticPropsContext<ParsedUrlQuery, PreviewData> = {};

      const paths = await getStaticPaths(context);

      expect(paths).toStrictEqual(expectedPaths);
    });
  });
});
