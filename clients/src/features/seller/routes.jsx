export const ROUTE_KEYS = {
  ACCOUNT: "tai-khoan",
  REGISTER: "dang-ki",
  LOGIN: "dang-nhap",
  MANAGEMENT: "quan-ly",
  PRODUCTS: "san-pham",
  INSERT: "them",
  UPDATE: "chinh-sua",
  DELETE: "xoa",
  ORDERS: "don-hang",
  RETURN: "tra-hang",
  NOT_FOUND: "*",
};

export const routePaths = {
  account: {
    root: `/${ROUTE_KEYS.ACCOUNT}`,
    register: `/${ROUTE_KEYS.ACCOUNT}/${ROUTE_KEYS.REGISTER}`,
    login: `/${ROUTE_KEYS.ACCOUNT}/${ROUTE_KEYS.LOGIN}`
  },
  management: {
    root: `/${ROUTE_KEYS.MANAGEMENT}`,
    product: {
      root: `/${ROUTE_KEYS.MANAGEMENT}/${ROUTE_KEYS.PRODUCTS}`,
      insert: `/${ROUTE_KEYS.MANAGEMENT}/${ROUTE_KEYS.PRODUCTS}/${ROUTE_KEYS.INSERT}`
    },
    orders: {
      root: `/${ROUTE_KEYS.MANAGEMENT}/${ROUTE_KEYS.ORDERS}`,
      return: `/${ROUTE_KEYS.MANAGEMENT}/${ROUTE_KEYS.ORDERS}/${ROUTE_KEYS.RETURN}`
    }
  }
};
