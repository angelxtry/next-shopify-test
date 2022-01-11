import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
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

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={"root"}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

Home.Layout = Layout;
