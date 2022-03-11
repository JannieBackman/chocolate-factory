// import { title } from "process";
// import { text } from "stream/consumers";
// import { Product } from "../products";

// const key = "cart";
// class CartStorage {
//   getProductsCart(): Product[] {
//     const products = JSON.parse(localStorage.getItem(key) || "[]");
//     return products;
//   }

//   removeProductOffCart(id: string = "0"): void {
//     const products = this.getProductsCart().filter((p) => p.id !== id);
//     this.setProductsToCart(products);
//   }
//   // export function setProductsToCart(products: any) {
//   //   throw new Error("Function not implemented.");
//   // }

//   setProductsToCart(products: Product[]): void {
//     localStorage.setItem(key, JSON.stringify(products || []));
//   }

//   addProductToCart(product: Product): void {
//     const products = [...this.getProductsCart(), product];
//     this.setProductsToCart(products);
//   }
// }

// export default new CartStorage();
