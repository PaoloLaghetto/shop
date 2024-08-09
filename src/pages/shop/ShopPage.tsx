import { Product } from "../../model/product.ts";
import { useEffect, useState } from "react";
import { pb } from "../../pocketbase.ts";
import { ProductCard } from "./components/ProductCard.tsx";
import { ServerError, Spinner } from "../../shared";
import { useCartPanel } from "../../services/cart";
import { useCart } from "../../services/cart/useCart.ts";

export function ShopPage() {
  // hook useState per aggiornare componente ogni volta che lo stato cambia
  const [products, setProducts] = useState<Product[]>([]);
  const [pending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const openCartPanel = useCartPanel((state) => state.openOverlay);
  const addToCart = useCart((state) => state.addToCart);

  // hook useEffect con [] viene eseguito solo una volta quando viene instanziato il componente
  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    pb.collection("products")
      .getList<Product>()
      .then((res) => setProducts(res.items))
      .catch(() => setError(true))
      .finally(() => setPending(false));
  }

  /*  function addToCart(p: Partial<Product>) {
    openCartPanel();
    addToCart();
  }*/

  return (
    <div>
      <h1 className="title">SHOP</h1>

      {/*visualizzo il loading solo quando pending è true*/}
      {pending && <Spinner />}
      {error && <ServerError />}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {products.map((p) => {
          return (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={() => {
                openCartPanel();
                addToCart(p);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
