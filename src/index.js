import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { client } from './apollo/client';

const app = (
	<ApolloProvider client={client}>
		<ApolloHooksProvider client={client}>
			<App />
		</ApolloHooksProvider>
	</ApolloProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
