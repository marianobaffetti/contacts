const fetchData = (state = {contacts: [], loading: true}, action) => {
    switch(action.type) {
        case "FETCH":
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
export default fetchData;


