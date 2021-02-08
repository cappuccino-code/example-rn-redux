import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER,
    SET_COUNTER
} from './actionTypes'

// this is an action creator, a fucntion that creates and returns an action object
// that will be used by the store to describe what action is being inputted
// from redux docs. These are similar to the events that the reducer functions are listening to

export default {
    incrementCounter: () => ({
        type: INCREMENT_COUNTER
    }),
    decrementCounter: () => ({
        type: DECREMENT_COUNTER
    }),
    resetCounter: () => ({
        type: RESET_COUNTER
    }),
    setCounter: value => ({
        type: SET_COUNTER,
        payload: {
            value
        }
    }),
}