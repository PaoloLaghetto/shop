import { pb } from "../../pocketbase";
import { Product } from "../../model/product.ts";

export function get() {
  return pb.collection("products").getList<Product>();
}

export function remove(id: string) {
  return pb.collection("products").delete(id);
}

export function add(product: Partial<Product>) {
  return pb.collection("products").create<Product>(product);
}

export function edit(product: Partial<Product>) {
  return pb.collection("products").update<Product>(product.id!, product);
}
