import { FETCH_FILM_START, FETCH_FILM_SUCCESS, FETCH_FILM_ERROR } from '../actions';

const initialState = {
	film: null, // our "success" state

	// want to make sure we account for all possible states,
	// including the loading and error states
	isLoading: false,
	error: null
};



// our finite state machine written out in code--
// all the possible states, and actions that can be taken
// which result in a new state.
export function reducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_FILM_START:
            return {
                //always pass down state and payload is what you want to happen or add
                ...state, isLoading: true
            }

            case FETCH_FILM_SUCCESS: 
            return {
                ...state, 
                film: action.payload, //  is res.data that was set in ../actions
                isLoading: false
            }

            case FETCH_FILM_ERROR: {
                return {
                    ...state, 
                    error: action.payload,
                    isLoading: false
                }
            }
            default:
                return state;
    }
        

}