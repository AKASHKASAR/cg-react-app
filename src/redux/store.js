//// create store using redux 
import { createStore } from "redux";
import rootReducer from "./reducer";

console.log(`store.js`);

const store = createStore(rootReducer);

export default store;




//// create store using redux toolkit 

// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// })

