import React from 'react';

const Clickable = (props) => {
	const { children, onClick, ...rest } = props;

	const handleClick = (e) => {
		onClick && onClick(e);
	};

	return (
		<span
			{...rest}
			onClick={handleClick}
			style={{ cursor: 'pointer', ...rest.style }}
		>
			{children}
		</span>
	);
};

export default Clickable;
