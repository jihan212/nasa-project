import React from 'react';

const Centered = (props) => {
	const styles = {
		root: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			height: '100%',
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
