import React from 'react';

const Centered = (props) => {
	const styles = {
		root: {
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'center',
			width: '100%',
			minHeight: '100%',
			animation: 'fadeInUp 1.2s ease-out',
			position: 'relative',
		},
	};

	return (
		<div
			style={{
				...styles.root,
				...props.style,
			}}
		>
			{props.children}
		</div>
	);
};

export default Centered;
