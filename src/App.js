import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
//--------------------------------------------------
import Header from "./components/header/Header";
import HomeList from "./components/homeList/HomeList";
import ElementList from "./components/elementList/ElementList";
import SearchForm from "./components/searchForm/SearchForm";

export default class App extends Component {
	state = {};

	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" exact component={HomeList} />
					<Route path="/movies/:movieId" component={ElementList} />
					<Route path="/movies" component={SearchForm} />
				</Switch>
			</div>
		);
	}
}
