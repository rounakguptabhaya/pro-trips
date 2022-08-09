import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMountain, faBeer } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [...this.props.trips]
        }
    }
    render() {
        return (
            <>
                <p className="home"><span className="total">{this.state.trips.length}</span>trips</p>
                <div className="trips">
                    <span>{this.state.trips.filter((trip) => { return trip.type === "tropic" }).length}<FontAwesomeIcon icon={faSun} /></span>
                    <span>{this.state.trips.filter((trip) => { return trip.type === "trek" }).length}<FontAwesomeIcon icon={faMountain} /></span>
                    <span>{this.state.trips.filter((trip) => { return trip.type === "club" }).length}<FontAwesomeIcon icon={faBeer} /></span>
                </div>
            </>
        )
    }
}
