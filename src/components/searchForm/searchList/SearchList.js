import React from "react";
import { Link, withRouter } from "react-router-dom";

const SearchList = ({ qweryList, location }) => {
	return (
		<ul>
			{qweryList.map((item) => (
				<li key={item.id}>
					<Link
						to={{
							pathname: `/movies/${item.id}`,
							state: { from: location },
						}}
					>
						{item.original_title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default withRouter(SearchList);
