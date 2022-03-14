// import React, { useContext } from "react";
// import { mockedProducts, Product } from "../products";

// interface CartContext {
//   addItem: (newItem: Product) => void;
//   removeItem: (itemID: number) => void;

//   items: Product[];
// }

// export const CartItemContext = React.createContext<CartContext>({
//   addItem: () => {},

//   removeItem: () => {},
//   items: [],
// });

// function AddToCart() {
//   const itemContext = useContext(CartItemContext);
//   return (
//     <div>
//       <button
//         onClick={() =>
//           itemContext?.addItem({
//             id: itemContext?.items.length + 1,
//           })
//         }
//       >
//         Add to Cart
//       </button>

//       <button onClick={removeItem}>Remove Item</button>
//       {Product.Map((product) => (
//         <div>
//           <p>{product.id}</p>
//           <p>{product.name}</p>
//           <p>antal</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AddToCart;
