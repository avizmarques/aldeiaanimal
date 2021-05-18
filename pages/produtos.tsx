import axios from "axios";

import { Product } from "../model";
import PageTopImage from "../components/pageTopImage";
import { ProductCard } from "../components/products/productCard";
import { url } from "./_app";

export async function getStaticProps() {
  const { data: products } = await axios.get(`${url}/produtos`);

  return {
    props: {
      products,
    },
  };
}

export default function Produtos({ products }: { products: Product[] }) {
  return (
    <div>
      <PageTopImage label="Os nossos produtos" />
      <div className="py-24">
        <div className="md:grid md:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
