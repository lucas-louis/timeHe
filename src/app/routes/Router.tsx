import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import HomePage from 'pages/HomePage';

import AuthRoute from './AuthRoute';

const Router = (): JSX.Element => (
	<BrowserRouter>
		<Switch>
			<AuthRoute exact path="/" children={<HomePage />} />
			<Redirect push to="/" />
		</Switch>
	</BrowserRouter>
);

export default Router;
