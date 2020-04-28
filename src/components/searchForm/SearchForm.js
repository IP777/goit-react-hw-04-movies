import React, { Component } from "react";
import style from "./SearchForm.module.css";
import { serchRequest } from "./../axiosRequest/AxiosRequest";
import SearchList from "./searchList/SearchList";
import queryString from "query-string";

export default class SearchForm extends Component {
	state = {
		qweryList: [],
		value: "batman",
	};

	componentDidMount() {
		const qwery = queryString.parse(this.props.location.search).qwery;
		console.log(qwery);

		if (qwery) {
			this.setState({ value: qwery });
			this.searchFunc(qwery);
		}
	}

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	handelSubmit = (e) => {
		e.preventDefault();
		//console.log(this.state.value);

		//реализация если предидущая категория не совпадает
		this.searchFunc(this.state.value);

		this.props.history.push({
			...this.props.location.pathname,
			search: `qwery=${this.state.value}`,
		});
	};

	searchFunc = (qwery) => {
		serchRequest(qwery).then((resp) =>
			this.setState({ qweryList: resp.data.results })
		);
	};

	render() {
		const { value, qweryList } = this.state;
		return (
			<>
				<form className={style.form} onSubmit={this.handelSubmit}>
					<input
						className={style.formText}
						type="text"
						value={value}
						name="value"
						placeholder="Enter search"
						onChange={this.handleChange}
					/>
					<button type="submit" className={style.formButton}>
						Search
					</button>
				</form>
				<hr />
				{qweryList.length > 0 && <SearchList qweryList={qweryList} />}
			</>
		);
	}
}
