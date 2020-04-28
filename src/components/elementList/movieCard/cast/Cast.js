import React, { Component } from "react";
import { actorsRequest } from "../../../axiosRequest/AxiosRequest";

const imagePosterPath = (src) => {
	return `https://image.tmdb.org/t/p/w138_and_h175_face/${src}`;
};

export default class Cast extends Component {
	state = { actors: [] };

	componentDidMount() {
		actorsRequest(this.props.pageId).then((resp) =>
			this.setState({ actors: resp.data.cast })
		);
	}

	render() {
		const { actors } = this.state;

		return (
			<ul>
				{actors.map(({ name, id, profile_path }) => (
					<li key={id}>
						<p>{name}</p>
						<img
							alt={name}
							src={
								profile_path
									? imagePosterPath(profile_path)
									: "https://via.placeholder.com/138x175?text=Actors"
							}
						/>
					</li>
				))}
			</ul>
		);
	}
}
