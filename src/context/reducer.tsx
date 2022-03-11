// import TYPES from "./types";
// import { Product } from "../products";
// import { addSelect, removeSelect } from "./selectors";

// interface CartAction {
//   types: TYPES;
//   id: string;
//   product: Product;
// }

// interface CartState {
//   products: Product[];
// }

// export default function cartActions(
//   state: CartState,
//   action: CartAction
// ): CartState {
//   switch (action.types) {
//     case TYPES.CARTADD:
//       return {
//         products: addSelect(state.products, action.product),
//       };
//     case TYPES.CARTREMOVE:
//       return {
//         products: removeSelect(state.products, action.id),
//       };
//     default:
//       return state;
//   }
// }
