import { combineReducers } from "redux";
import counterReducer from './counterReducer'

// currently unneccary but as the application grows and we add more reducers
// this would be the simplest way to combine and rexport them as a rootreducer
export default combineReducers({
    counter: counterReducer,
})