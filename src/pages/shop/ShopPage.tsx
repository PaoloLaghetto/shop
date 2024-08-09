import { Product } from "../../model/product.ts";
import { useEffect, useState } from "react";
import { pb } from "../../pocketbase.ts";

export function ShopPage() {
  // hook useState per aggiornare componente ogni volta che lo stato cambia
  const [products, setProducts] = useState<Product[]>([]);

  // hook useEffect con [] viene eseguito solo una volta quando viene instanziato il componente
  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    pb.collection("products")
      .getList<Product>()
      .then((res) => {
        setProducts(res.items);
      });
  }

  console.log(products);
  return (
    <div>
      <h1 className="title">SHOP</h1>

      {products.map((p) => {
        return <li key={p.id}>{p.name}</li>;
      })}
    </div>
  );
}
