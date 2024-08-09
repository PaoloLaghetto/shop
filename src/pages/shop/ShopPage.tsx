import PocketBase from "pocketbase";
export const pb = new PocketBase("http://127.0.0.1:8090");

export function ShopPage() {
  function loadData() {
    pb.collection("products")
      .getList()
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div>
      <h1 className="title">SHOP</h1>
      <button className="btn" onClick={loadData}>
        load data
      </button>
    </div>
  );
}
