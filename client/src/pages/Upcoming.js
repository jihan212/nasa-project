import React, { useMemo } from 'react';

import Clickable from '../components/Clickable';

const Upcoming = (props) => {
	const { launches, abortLaunch } = props;

	const styles = {
		container: {
			padding: '20px',
		},
		paragraph: {
			marginBottom: '20px',
			color: '#a1ecfb',
			lineHeight: '1.6',
		},
		warning: {
			marginBottom: '20px',
			color: '#ff6b6b',
			fontWeight: 'bold',
		},
		table: {
			width: '100%',
			borderCollapse: 'collapse',
			marginTop: '20px',
		},
		th: {
			borderBottom: '2px solid #a1ecfb',
			padding: '12px 8px',
			textAlign: 'left',
			color: '#a1ecfb',
			fontWeight: 'bold',
		},
		td: {
			padding: '12px 8px',
			borderBottom: '1px solid rgba(161, 236, 251, 0.3)',
			color: '#a1ecfb',
		},
		link: {
			color: 'red',
			textDecoration: 'none',
			cursor: 'pointer',
		},
	};

	const tableBody = useMemo(() => {
		return launches
			?.filter((launch) => launch.upcoming)
			.map((launch) => {
				return (
					<tr key={String(launch.flightNumber)}>
						<td>
							<Clickable style={{ color: 'red' }}>
								<span
									style={styles.link}
									onClick={() =>
										abortLaunch(launch.flightNumber)
									}
								>
									✖
								</span>
							</Clickable>
						</td>
						<td>{launch.flightNumber}</td>
						<td>{new Date(launch.launchDate).toDateString()}</td>
						<td>{launch.mission}</td>
						<td>{launch.rocket}</td>
						<td>{launch.target}</td>
					</tr>
				);
			});
	}, [launches, abortLaunch, styles.link]);

	return (
		<article
			id='upcoming'
			style={styles.container}
		>
			<p style={styles.paragraph}>
				Upcoming missions including both SpaceX launches and newly
				scheduled Zero to Mastery rockets.
			</p>
			<p style={styles.warning}>
				Warning! Clicking on the ✖ aborts the mission.
			</p>
			<table style={styles.table}>
				<thead>
					<tr>
						<th style={{ ...styles.th, width: '3rem' }}></th>
						<th style={{ ...styles.th, width: '3rem' }}>No.</th>
						<th style={{ ...styles.th, width: '10rem' }}>Date</th>
						<th style={{ ...styles.th, width: '11rem' }}>
							Mission
						</th>
						<th style={{ ...styles.th, width: '11rem' }}>Rocket</th>
						<th style={styles.th}>Destination</th>
					</tr>
				</thead>
				<tbody>{tableBody}</tbody>
			</table>
		</article>
	);
};

export default Upcoming;
