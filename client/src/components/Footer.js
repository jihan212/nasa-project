import React from 'react';

const Footer = () => {
	const styles = {
		footer: {
			borderTop: '1px solid rgba(161, 236, 251, 0.3)',
			padding: '12px',
			textAlign: 'center',
			background: 'rgba(0, 0, 0, 0.8)',
			backdropFilter: 'blur(20px)',
			position: 'relative',
			zIndex: 10,
			margin: 0,
		},
		paragraph: {
			margin: '0',
			color: '#a1ecfb',
			fontSize: '14px',
			textShadow: '0 0 20px rgba(161, 236, 251, 0.5)',
			fontWeight: '500',
			letterSpacing: '1px',
			animation: 'glow 4s ease-in-out infinite alternate',
		},
		spaceElements: {
			display: 'inline-block',
			margin: '0 8px',
			animation: 'float 6s ease-in-out infinite',
		},
	};

	return (
		<footer style={styles.footer}>
			<p style={styles.paragraph}>
				<span style={styles.spaceElements}>🚀</span>
				NASA Mission Control - Exploring the Cosmos
				<span style={styles.spaceElements}>🌌</span>
			</p>
		</footer>
	);
};

export default Footer;
