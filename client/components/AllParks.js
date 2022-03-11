import React from 'react'
import {connect} from 'react-redux'
import { fetchParks } from '../store/parks'

class AllParks extends React.Component {

    componentDidMount () {
        this.props.getParks()
    }
    render () {
        const parks = this.props.allParks;
        return (
            <div className='all-parks'>
                {parks.map((park) => {
                    <div key={park.id} className='each-park'>
                        <div>{park.name}</div>
                    </div>
                })}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        allParks: state.parks
    }
}

const mapDispatch = (dispatch) => {
    return {
        getParks: () => dispatch(fetchParks())
    }
}

export default connect(mapState, mapDispatch)(AllParks)