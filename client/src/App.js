import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme, resources } from './settings';
import AppLayout from './pages/AppLayout';

const App = () => {
	return (
		<Router>
			<div
				style={{
					backgroundColor: '#000',
					color: theme.color.content,
					minHeight: '100vh',
					fontFamily: theme.typography.headerFontFamily,
				}}
			>
				<AppLayout
					show={true}
					resources={resources}
				/>
			</div>
		</Router>
	);
};

export default App;
