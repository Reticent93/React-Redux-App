import React from 'react'
import {connect} from 'react-redux'

function Film(props) {
    console.log('film',props)
    return (
        <div>
        {props.film.film.map(films => {
            console.log('film', props.film)
            return(
            <h1 key={films.mal_id}>
                <p>{films.title}</p>
                </h1>
        )})}
        </div>
    )
}


function mapStateToProps(state) {
    console.log('bug',state)
    return{
        film: []
    }
    
}

export default connect(mapStateToProps, {})(Film)
