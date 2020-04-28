import React, { Component } from "react";
import { movieIdRequest } from "./../axiosRequest/AxiosRequest";
//--------------------------------------------------------------
import MovieCard from "./movieCard/MovieCard";

const getId = (props) => props.match.params.movieId;

export default class ElementList extends Component {
	state = { movieObj: null };

	componentDidMount() {
		movieIdRequest(getId(this.props)).then((movieObj) =>
			this.setState({ movieObj: movieObj.data })
		);
	}

	onGoBack = () => {
		const { history, location } = this.props;

		if (location.state) {
			return history.push(location.state.from);
		}
		history.push("/");
	};

	render() {
		const { movieObj } = this.state;
		return (
			<>
				{movieObj && (
					<MovieCard movieObj={movieObj} onGoBack={this.onGoBack} />
				)}
			</>
		);
	}
}
