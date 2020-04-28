import React, { Component } from "react";
import { reviewRequest } from "../../../axiosRequest/AxiosRequest";

export default class Reviews extends Component {
	state = { reviews: [] };

	componentDidMount() {
		reviewRequest(this.props.pageId).then((resp) =>
			this.setState({ reviews: resp.data.results })
		);
	}

	render() {
		const { reviews } = this.state;

		return (
			<ul>
				{reviews.length > 0 ? (
					reviews.map(({ author, content, id }) => (
						<li key={id}>
							<h4>{author}</h4>
							<p>{content}</p>
						</li>
					))
				) : (
					<p>No Reviews</p>
				)}
			</ul>
		);
	}
}
