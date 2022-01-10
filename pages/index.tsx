import { getConfig } from "@framework/api/config";
import { getAllProducts } from "@framework/product/get-all-products";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>;
}

export default Home;
