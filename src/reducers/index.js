import { combineReducers } from "redux"; // ตัวเอาไว้รวม
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
  //รวม
  orders: OrderReducer,
  products: ProductReducer,
});

export default rootReducer; // export ตัวรวม
