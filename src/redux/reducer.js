import { GET_EMP_BY_ID } from "./types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    console.log(`rootReducer rootReducer.js`);
    // create more actions here - 
    if (action.type === GET_EMP_BY_ID) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;

















