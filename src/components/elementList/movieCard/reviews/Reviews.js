import React, { Component } from "react";
import { reviewRequest } from "../../../axiosRequest/AxiosRequest";

//Костыль... вытиягиваю id из url
const getId = (props) => props.match.url.split("/")[2];

export default class Reviews extends Component {
	state = { reviews: [] };

	componentDidMount() {
		reviewRequest(getId(this.props)).then((resp) =>
			this.setState({ reviews: resp.data.results })
		);
	}

	render() {
		const { reviews } = this.state;
		console.log(reviews);

		return (
			<>
				<h3>Reviews</h3>
				<ul>
					{reviews.length > 0 &&
						reviews.map(({ author, content, id }) => (
							<li key={id}>
								<h4>{author}</h4>
								<p>{content}</p>
							</li>
						))}
				</ul>
			</>
		);
	}
}
