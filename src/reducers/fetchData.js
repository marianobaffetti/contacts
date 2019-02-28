import contactsMock from '../apiMock'

const fetchData = (state = {contacts: [], loading: true}, action) => {
    switch(action.type) {
        case "FETCH":
            return {
                ...state,
                contacts: contactsMock,
                loading: false
            }
        default:
            return state;
    }
}

export default fetchData;