// import { Product } from "../products";
// import CartStorage from "./CartStorage";

// export function removeSelect(products: Product[], id = ""): Product[] {
//   CartStorage.removeProductOffCart(id);
//   return products.filter((product) => product.id == id);
// }

// export function addSelect(products: Product[], product?: Product): Product[] {
//   if (product && !products.find((p) => p.id === product.id)) {
//     CartStorage.addProductToCart(product);
//     return [...products, product];
//   }
//   return products;
// }
