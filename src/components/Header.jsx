import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendarPlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'






export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/addTrip"><FontAwesomeIcon icon={faCalendarPlus} /></Link>
                <Link to="/display"><FontAwesomeIcon icon={faCalendarAlt} /></Link>
            </div>
        )
    }
}
