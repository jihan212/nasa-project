import React, { useMemo } from 'react';

const History = (props) => {
	const tableBody = useMemo(() => {
		return props.launches
			?.filter((launch) => !launch.upcoming)
			.map((launch) => {
				return (
					<tr key={String(launch.flightNumber)}>
						<td>
							<span
								style={{
									color: launch.success
										? 'greenyellow'
										: 'red',
								}}
							>
								█
							</span>
						</td>
						<td>{launch.flightNumber}</td>
						<td>{new Date(launch.launchDate).toDateString()}</td>
						<td>{launch.mission}</td>
						<td>{launch.rocket}</td>
						<td>{launch.customers?.join(', ')}</td>
					</tr>
				);
			});
	}, [props.launches]);

	const styles = {
		container: {
			padding: '20px',
		},
		paragraph: {
			marginBottom: '20px',
			color: '#a1ecfb',
			lineHeight: '1.6',
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
		status: {
			fontSize: '20px',
		},
	};

	return (
		<article id='history' style={styles.container}>
			<p style={styles.paragraph}>
				History of mission launches including SpaceX launches
				starting from the year 2006.
			</p>
			<table style={styles.table}>
				<thead>
					<tr>
						<th style={{ ...styles.th, width: '2rem' }}></th>
						<th style={{ ...styles.th, width: '3rem' }}>No.</th>
						<th style={{ ...styles.th, width: '9rem' }}>Date</th>
						<th style={styles.th}>Mission</th>
						<th style={{ ...styles.th, width: '7rem' }}>Rocket</th>
						<th style={styles.th}>Customers</th>
					</tr>
				</thead>
				<tbody>{tableBody}</tbody>
			</table>
		</article>
	);
};

export default History;
