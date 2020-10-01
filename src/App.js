import React from 'react';
import { Home } from './taxi_app/Home';
import { About } from './taxi_app/About';
import { Profile } from './taxi_app/Profile';

const PAGES = {	
	home: <Home />,
	about: <About />,
	profile: <Profile />
}

class App extends React.Component {

	state = { currentPage: "home" }

	navigateTo = (page) => {
		this.setState({ currentPage: page })
	};

	render() {
		return (
			<>
				<header>
					<nav>
						<ul>
							<li>
								<button
									onClick={() => {
										this.navigateTo("home");
									}}
								>
									Home
							</button>
							</li>
							<li>
								<button
									onClick={() => {
										this.navigateTo("about");
									}}
								>
									about
							</button>
							</li>
							<li>
								<button
									onClick={() => {
										this.navigateTo("profile");
									}}
								>
									profile
							</button>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					<section>
						{PAGES[this.state.currentPage]}
					</section>
				</main>
			</>
		);
	}
}

export default App;



