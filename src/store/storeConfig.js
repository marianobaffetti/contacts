import fetchData from '../reducers/fetchData'
import { createStore } from 'redux'

const store = createStore(fetchData);

export default store;