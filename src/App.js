import SocmedChecker from "./container/SocmedChecker";
import UserGenerator from "./container/UserGenerator";
import Navbar from './container/Navbar';
import Faq from './container/Faq';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
		<Router>
			<div>
				<Navbar />
				<div>
					<Switch>
						<Route exact path="/">
							<SocmedChecker />
						</Route>
						<Route exact path="/random">
							<UserGenerator />
						</Route>
						<Route path="/faq">
							<Faq />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
