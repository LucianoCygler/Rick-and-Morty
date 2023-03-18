import { createStore } from "redux";
import rootReducer from "./reducer";

var store = createStore(rootReducer);
export default store;