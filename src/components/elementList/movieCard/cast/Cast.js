import React, { Component } from "react";
import { actorsRequest } from "../../../axiosRequest/AxiosRequest";

//Костыль... вытиягиваю id из url
const getId = (props) => props.match.url.split("/")[2];

export default class Cast extends Component {
	state = { actors: [] };

	componentDidMount() {
		//console.log(getId(this.props));
		actorsRequest(getId(this.props)).then(
			(resp) => this.setState({ actors: resp.data.cast })
			//resp.data.cast.map(({ name }) => console.log(name))
		);
	}

	render() {
		const { actors } = this.state;
		//console.log(actors);

		return (
			<>
				<h2>Hi Cast!</h2>
				{actors.map(({ name, cast_id }) => (
					<p key={cast_id}>{name}</p>
				))}
			</>
		);
	}
}

//export default withRouter(Cast);
