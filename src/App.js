import "./styles/styles.css";

import React, { Component, Fragment } from "react";
import MyProvider from "./MyProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import MyContext from "./MyContext";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { prevPage: "" };
	}

	render() {
		return (
			<div>
				<MyProvider>
					<Router>
						<MyContext.Consumer>
							{context => (
								<Fragment>
									<div
										style={{ fontFamily: `${context.state.font}` }}
										className={
											context.state.changeColor ? `changeColor` : `normal`
										}
									>
										<ScrollToTop>
											<Routes />
										</ScrollToTop>
									</div>
								</Fragment>
							)}
						</MyContext.Consumer>
					</Router>
				</MyProvider>
			</div>
		);
	}
}

export default App;
