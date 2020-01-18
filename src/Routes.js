import React from "react";
import { Route, Switch } from "react-router-dom";

// General
import Home from "./components/Home";
import Work from "./components/Work";
import WorkBlocks from "./components/WorkBlocks";
import About from "./components/About";
import FollowTheForest from "./components/work/followtheforest";
import CafeteriaIndustrial from "./components/work/cafeteriaindustrial";

export default () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/work" component={Work} />
				<Route exact path="/workblocks" component={WorkBlocks} />
				<Route exact path="/about" component={About} />
				<Route exact path="/followtheforest" component={FollowTheForest} />
				<Route
					exact
					path="/cafeteriaindustrial"
					component={CafeteriaIndustrial}
				/>
			</Switch>
		</div>
	);
};
