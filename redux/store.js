import { createStore } from 'redux'
import rootReducer from './reducers/'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// when we have multiple reducer files we will need to export a root reducer that
// is made by the combineReducer Function
export default createStore(rootReducer, {
    counter: {
        counter: 0
    }
})