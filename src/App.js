import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
//--------------------------------------------------
import Header from "./components/header/Header";
import HomeList from "./pages/homePage/HomePage";
import ElementList from "./components/cardPage/ElementList";
import SearchForm from "./pages/searchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";

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
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		);
	}
}
