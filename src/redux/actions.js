
const Action = (newData) => {
    console.log('Action was taken.');
    return {
        data: newData,
        type: 'DATA_CHANGED'
    }
}
export default Action;

