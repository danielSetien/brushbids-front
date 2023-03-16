import { rest } from "msw";
import { backRouteUtils } from "../utils/routeUtils/routeUtils";
import { mockPaintings, mockToken } from "../utils/testUtils/mockHardcodedData";
import waitPromise from "../utils/testUtils/waitPromise";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;

const { loginEndpoint, paintingsEndpoint } = backRouteUtils;

export const painting = mockPaintings[0];

const paintingDetail = mockPaintings[1];

export const handlers = [
  rest.post(`${apiUrl}${loginEndpoint}`, (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        token: mockToken,
      })
    );
  }),

  rest.get(`${apiUrl}${paintingsEndpoint}`, (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        paintings: mockPaintings,
      })
    );
  }),

  rest.get(
    `${apiUrl}${paintingsEndpoint}/${painting.id}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),

        ctx.json({
          painting: painting,
        })
      );
    }
  ),

  rest.get(
    `${apiUrl}${paintingsEndpoint}/${paintingDetail.id}`,
    async (req, res, ctx) => {
      await waitPromise();

      return res(
        ctx.status(200),

        ctx.json({
          painting: paintingDetail,
        })
      );
    }
  ),

  rest.delete(
    `${apiUrl}${paintingsEndpoint}/${painting.id}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),

        ctx.json({})
      );
    }
  ),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${loginEndpoint}`, (req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.get(`${apiUrl}${paintingsEndpoint}`, (req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.get(`${apiUrl}${paintingsEndpoint}/${painting.id}`, (req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.delete(
    `${apiUrl}${paintingsEndpoint}/${painting.id}`,
    async (req, res, ctx) => {
      return res(ctx.status(500));
    }
  ),
];
