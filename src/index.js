import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { AppProvider } from './utils/context'

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

