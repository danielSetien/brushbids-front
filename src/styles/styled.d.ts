import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      grayscale: {
        lightest: string;
        ligther: string;
        gray: string;
        dark: string;
        darker: string;
        darkest: string;
      };
    };
    fonts: {
      primary: string;
    };
    fontWeight: {
      primary: number;
    };
    fontSize: {
      medium: string;
      bigger: string;
    };
    margin: {
      page: string;
    };
  }
}
