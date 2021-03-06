import Image from "next/image";
import { Product } from "../../model";
import { url } from "../../pages/_app";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="p-8">
      <div className="h-40 relative">
        <Image
          src={`${url}${product.foto.url}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3>{product.titulo}</h3>
        <p>{product.descricao}</p>
      </div>
    </div>
  );
}
