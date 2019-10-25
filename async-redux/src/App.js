import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchFilms} from './actions'
import Film from './components/Film'


import './App.css';

function App(props) {

  useEffect(() =>  {
    props.fetchFilms();
  }, [])
  return (
    <div className="App">
      {props.filmError && <p>Error: {props.filmError}</p>}

      {props.isFilmLoading ? (
        <div className='spinner'/>
      ) : (
       <Film />
      )}
      
    </div>
  );
}


function mapStateToProps(state) {
  return {
      isFilmLoading: state.isLoading,
      filmImage: state.film,
      filmError: state.error
  }
}

const mapDispatchToState = {
  fetchFilms
}


export default connect(mapStateToProps, mapDispatchToState)(App);
