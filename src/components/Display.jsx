import React, { Component } from 'react'

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [...this.props.trips],
            type: "All"
        }
    }
    typeAll = () => {
        this.setState({
            trips: [...this.props.trips],
            type: "All"
        })
    }
    typeTrek = () => {
        this.setState({
            trips: [...this.props.trips.filter((trip) => {
                return trip.type === "trek"
            })],
            type: "Trek"
        })
    }
    typeClub = () => {
        this.setState({
            trips: [...this.props.trips.filter((trip) => {
                return trip.type === "club"
            })],
            type: "Club"
        })
    }
    typeTropic = () => {
        this.setState({
            trips: [...this.props.trips.filter((trip) => {
                return trip.type === "tropic"
            })],
            type: "Tropic"
        })
    }
    render() {
        return (
            <>
                <p className="headD">{this.state.type} Trips</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Place</th>
                            <th>Type</th>
                        </tr>
                        {
                            this.state.trips.map((trip) => {
                                return <tr>
                                    <td>{trip.date}</td>
                                    <td>{trip.place}</td>
                                    <td>{trip.type}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <div className="filter">
                    Filter by:
                    <span onClick={this.typeAll}>All</span><span className="symbol">&#9898;</span>
                    <span onClick={this.typeTrek}>Treks</span><span className="symbol">&#9898;</span>
                    <span onClick={this.typeClub}>Clubs</span><span className="symbol">&#9898;</span>
                    <span onClick={this.typeTropic}>Tropics</span>
                </div>
            </>
        )
    }
}
