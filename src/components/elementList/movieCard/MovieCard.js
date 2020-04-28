import React from "react";
import { Route, withRouter } from "react-router-dom";
//------------------------------------------
import style from "./MovieCard.module.css";
import Cast from "./cast/Cast";
import Reviews from "./reviews/Reviews";
import CustomLink from "./customLink/CustomLink";

const MovieCard = ({ movieObj, match, onGoBack, location }) => {
	const {
		id,
		original_title,
		poster_path,
		release_date,
		overview,
		genres,
		vote_average,
	} = movieObj;
	//console.log(location.state.from);

	const imagePosterPath = (src) => {
		return `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${src}`;
	};

	return (
		<>
			<button className={style.goBackBtn} onClick={onGoBack}>
				Go Back
			</button>
			<div className={style.cardWrapper}>
				<img
					alt={original_title}
					src={imagePosterPath(poster_path)}
					// className={style.img}
				/>
				<div className={style.descriptionWrapper}>
					<div>
						<h3 className={style.title}>
							{original_title}({release_date})
						</h3>
						<p>User Score: {vote_average} </p>
					</div>
					<div>
						<h4 className={style.block_title}>Overview</h4>
						<p className={style.review}> {overview}</p>
					</div>

					<div className={style.genresWrapper}>
						<h4 className={style.block_title}>Genres</h4>
						<ul>
							{genres.length > 0 &&
								genres.map((i) => <li key={i.id}>{i.name}</li>)}
						</ul>
					</div>
				</div>
			</div>
			<hr />
			<p>Addition information</p>
			<ul>
				<li>
					<CustomLink name={"Cast"} />
				</li>
				<li>
					<CustomLink name={"Reviews"} />
				</li>
			</ul>
			<hr />
			<Route
				path={`${match.url}/cast`}
				render={(props) => <Cast {...props} pageId={id} />}
			/>
			<Route
				path={`${match.url}/reviews`}
				render={(props) => <Reviews {...props} pageId={id} />}
			/>
		</>
	);
};

export default withRouter(MovieCard);
