import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid } from "@components/ui";
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
    <>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
}

Home.Layout = Layout;
