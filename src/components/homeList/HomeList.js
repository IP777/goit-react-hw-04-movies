import React, { Component } from "react";
import style from "./HomeList.module.css";
import { Link } from "react-router-dom";

import { popularRequest } from "./../axiosRequest/AxiosRequest";

export default class HomeList extends Component {
	state = { home_list: [] };

	componentDidMount() {
		popularRequest().then((response) => {
			this.setState({
				home_list: response.data.results,
			});
		});
	}

	render() {
		const { home_list } = this.state;

		return (
			<>
				<h3 className={style.title}>Trending today</h3>
				<ul className={style.list}>
					{home_list.map((item) => (
						<li key={item.id} className={style.item}>
							<Link
								to={{
									pathname: `/movies/${item.id}`,
									state: { from: this.props.location },
								}}
							>
								{item.original_title
									? item.original_title
									: item.name}
							</Link>
						</li>
					))}
				</ul>
			</>
		);
	}
}
