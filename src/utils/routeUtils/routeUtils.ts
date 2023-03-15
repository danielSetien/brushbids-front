interface FrontRouteUtilsStructure {
  homePage: string;
  loginPage: string;
  paintingDetail: string;
}

export const frontRouteUtils: FrontRouteUtilsStructure = {
  homePage: "/",
  loginPage: "/login",
  paintingDetail: "/paintings/",
};

interface BackRouteUtilsStructure {
  loginEndpoint: string;
  paintingsEndpoint: string;
}

export const backRouteUtils: BackRouteUtilsStructure = {
  loginEndpoint: "user/login/",
  paintingsEndpoint: "paintings",
};
