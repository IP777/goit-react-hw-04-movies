import React from "react";
import { Link, withRouter } from "react-router-dom";

const CustomLink = ({ name, match, location }) => {
	return (
		<Link
			to={{
				pathname: `${match.url}/${name.toLowerCase()}`,
				state: {
					from: location.state ? location.state.from : "/",
				},
			}}
		>
			{name}
		</Link>
	);
};

export default withRouter(CustomLink);
