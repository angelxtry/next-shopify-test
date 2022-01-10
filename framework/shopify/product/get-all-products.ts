import { ApiConfig } from "@common/types/api";
import { Product } from "@common/types/product";

import { ProductConnection } from "../schema";
import { getAllProductsQuery, normalizeProduct } from "../utils";

type ReturnType = {
  products: ProductConnection;
};

export const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];

  return products;
};
