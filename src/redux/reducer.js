
const Reducer = (state, action) => {
    console.log(`Reducer invoked.`);
    switch (action.type) {
        case 'DATA_CHANGED':
            console.log('Data passed.');
            return Object.assign({}, state, { data: action.data });
        default:
            console.log('Default value was presented.');
            return state;
    }
}
export default Reducer;

