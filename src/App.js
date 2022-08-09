import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddTrip from './components/AddTrip';
import Display from './components/Display';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      trips: [
        { date: "2017-01-01", place: "Manali", type: "trek" },
        { date: "2017-04-05", place: "Mumbai", type: "club" },
        { date: "2017-02-09", place: "Marina", type: "tropic" },
        { date: "2020-10-21", place: "Coimbatore", type: "trek" }
      ]
    }
  }
  addTrip = (newTrips) => {
    this.setState({
      trips: [...newTrips]
    })
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <div className="workplace">
            <Routes>
              <Route path="/" element={<Home trips={this.state.trips} />}/>
              <Route path="/addTrip" element={<AddTrip addTrip={this.addTrip} trips={this.state.trips} />} />
              <Route path="/Display"element={ <Display trips={this.state.trips} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}