import { Product } from "../../model/product.ts";
import { useEffect, useState } from "react";
import { pb } from "../../pocketbase.ts";
import { ProductCard } from "./components/ProductCard.tsx";

export function ShopPage() {
  // hook useState per aggiornare componente ogni volta che lo stato cambia
  const [products, setProducts] = useState<Product[]>([]);
  const [pending, setPending] = useState<boolean>(true);

  // hook useEffect con [] viene eseguito solo una volta quando viene instanziato il componente
  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    pb.collection("products")
      .getList<Product>()
      .then((res) => {
        setProducts(res.items);
        setPending(false);
      });
  }

  function addToCart(p: Partial<Product>) {
    console.log(p);
  }

  return (
    <div>
      <h1 className="title">SHOP</h1>

      {/*visualizzo il loading solo quando pending è true*/}
      {pending && <div>Loading...</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {products.map((p) => {
          return <ProductCard key={p.id} product={p} onAddToCart={addToCart} />;
        })}
      </div>
    </div>
  );
}
