import axios from 'axios'


//action to catch if spelling is incorrect
export const FETCH_FILM_START = 'FETCH_FILM_START'
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS'
export const FETCH_FILM_ERROR = 'FETCH_FILM_ERROR'

export function fetchFilms() {
      // this is our "thunk" function. redux-thunk middleware. let's us interject a function to call later. perfect for axios calls
  // automatically gives us access to the dispatcher as a parameter
    return dispatch => {
        axios
        .get('https://api.jikan.moe/v3/search/anime?q=naruto&limit=16')
        .then(res => {
            //notice that this is an action creator. must still call the response
            dispatch({type: FETCH_FILM_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
             //notice that this is an action creator. must still call the error
            dispatch({type: FETCH_FILM_ERROR, payload:err})
        }) 
    }
}