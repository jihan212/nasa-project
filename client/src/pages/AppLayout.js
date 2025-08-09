import React from 'react';
import { Routes, Route } from 'react-router-dom';

import usePlanets from '../hooks/usePlanets';
import useLaunches from '../hooks/useLaunches';

import Centered from '../components/Centered';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Launch from './Launch';
import History from './History';
import Upcoming from './Upcoming';

const AppLayout = () => {
	const styles = {
		content: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
			margin: 0,
			padding: 0,
			position: 'relative',
		},
		centered: {
			flex: 1,
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'center',
			backgroundImage: 'url(/img/background-large.jpg)',
			margin: 0,
			padding: '20px 0',
		},
		frame: {
			border: '1px solid rgba(161, 236, 251, 0.3)',
			borderRadius: '20px',
			padding: '15px 35px',
			margin: '10px',
			background: 'rgba(0, 0, 0, 0.7)',
			boxShadow:
				'0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
			backdropFilter: 'blur(20px)',
			position: 'relative',
			maxWidth: '90vw',
			width: '90vw',
			boxSizing: 'border-box',
			overflow: 'hidden',
		},
		starsContainer: {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: -1,
			pointerEvents: 'none',
		},
	};

	const { launches, isPendingLaunch, submitLaunch, abortLaunch } =
		useLaunches(
			() => {},
			() => {},
			() => {}
		);

	const planets = usePlanets();

	// Create floating stars
	const stars = Array.from({ length: 20 }, (_, i) => (
		<div
			key={i}
			style={{
				background: 'rgba(255, 255, 255, 0.8)',
				borderRadius: '50%',
				animation: `starfield ${
					Math.random() * 20 + 10
				}s linear infinite`,
				animationDelay: `${Math.random() * 20}s`,
			}}
		/>
	));

	return (
		<div style={styles.content}>
			{/* Space Background */}

			{/* Floating Stars */}
			<div style={styles.starsContainer}>{stars}</div>

			<Header onNav={() => {}} />
			<Centered style={styles.centered}>
				<div style={styles.frame}>
					<Routes>
						<Route
							path='/'
							element={
								<Launch
									entered={true}
									planets={planets}
									submitLaunch={submitLaunch}
									isPendingLaunch={isPendingLaunch}
								/>
							}
						/>
						<Route
							path='/launch'
							element={
								<Launch
									entered={true}
									planets={planets}
									submitLaunch={submitLaunch}
									isPendingLaunch={isPendingLaunch}
								/>
							}
						/>
						<Route
							path='/upcoming'
							element={
								<Upcoming
									launches={launches}
									abortLaunch={abortLaunch}
								/>
							}
						/>
						<Route
							path='/history'
							element={
								<History
									entered={true}
									launches={launches}
								/>
							}
						/>
					</Routes>
				</div>
			</Centered>
			<Footer />
		</div>
	);
};

export default AppLayout;
