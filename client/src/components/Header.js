import React from 'react';
import { Link } from 'react-router-dom';
import Clickable from './Clickable';

const Header = (props) => {
	const { onNav, ...rest } = props;

	const styles = {
		root: {
			display: 'flex',
			flexDirection: 'row',
			lineHeight: '60px',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '0 20px',
			margin: 0,
			borderBottom: '1px solid rgba(161, 236, 251, 0.3)',
			background: 'rgba(0, 0, 0, 0.8)',
			backdropFilter: 'blur(20px)',
			boxShadow: '0 8px 32px rgba(161, 236, 251, 0.1)',
			position: 'relative',
			zIndex: 10,
		},
		logo: {
			display: 'flex',
			alignItems: 'center',
		},
		nav: {
			display: 'flex',
			gap: '10px',
		},
		banner: {
			fontWeight: 'bold',
			marginLeft: '10px',
			marginRight: '15px',
			fontSize: 28,
			color: '#a1ecfb',
			textShadow: '0 0 30px rgba(161, 236, 251, 0.7)',
			fontFamily: 'Arial, sans-serif',
			animation: 'glow 3s ease-in-out infinite alternate',
		},
		clickable: {
			fontSize: 10,
			cursor: 'pointer',
		},
		link: {
			color: '#a1ecfb',
			textDecoration: 'none',
		},
		button: {
			padding: '8px 12px',
			border: '1px solid rgba(161, 236, 251, 0.6)',
			borderRadius: '15px',
			backgroundColor: 'rgba(161, 236, 251, 0.05)',
			color: '#a1ecfb',
			transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
			fontSize: '12px',
			fontWeight: '500',
			letterSpacing: '0.5px',
			position: 'relative',
			overflow: 'hidden',
			boxShadow: '0 4px 15px rgba(161, 236, 251, 0.1)',
			backdropFilter: 'blur(10px)',
			minWidth: 'auto',
			maxWidth: 'none',
			width: 'auto',
			height: 'auto',
			lineHeight: '1.2',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		buttonHover: {
			transform: 'translateY(-3px) scale(1.05)',
			boxShadow: '0 12px 30px rgba(161, 236, 251, 0.4)',
			borderColor: 'rgba(161, 236, 251, 0.9)',
			backgroundColor: 'rgba(161, 236, 251, 0.15)',
		},
		img: {
			margin: '15px 10px 15px 0',
			height: '50px',
			width: 'auto',
			filter: 'drop-shadow(0 0 15px rgba(161, 236, 251, 0.5))',
			animation: 'float 6s ease-in-out infinite',
		},
		buttonGlow: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			borderRadius: '15px',
			background:
				'linear-gradient(45deg, transparent, rgba(161, 236, 251, 0.1), transparent)',
			opacity: 0,
			transition: 'opacity 0.3s ease',
		},
	};

	const handleMouseEnter = (e) => {
		const button = e.currentTarget;
		const glow = button.querySelector('.glow');
		if (glow) {
			button.style.transform = styles.buttonHover.transform;
			button.style.boxShadow = styles.buttonHover.boxShadow;
			button.style.borderColor = styles.buttonHover.borderColor;
			button.style.backgroundColor = styles.buttonHover.backgroundColor;
			glow.style.opacity = '1';
		}
	};

	const handleMouseLeave = (e) => {
		const button = e.currentTarget;
		const glow = button.querySelector('.glow');
		if (glow) {
			button.style.transform = 'translateY(0) scale(1)';
			button.style.boxShadow = styles.button.boxShadow;
			button.style.borderColor = styles.button.borderColor;
			button.style.backgroundColor = styles.button.backgroundColor;
			glow.style.opacity = '0';
		}
	};

	return (
		<header
			style={styles.root}
			{...rest}
		>
			<div style={styles.logo}>
				<div style={styles.banner}>🚀 NASA Mission Control</div>
			</div>
			<nav style={styles.nav}>
				<Clickable onClick={onNav}>
					<Link
						style={styles.link}
						to='/launch'
					>
						<div
							style={styles.button}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div
								style={styles.buttonGlow}
								className='glow'
							></div>
							<i
								className='material-icons'
								style={{ fontSize: '14px', marginRight: '6px' }}
							>
								rocket_launch
							</i>
							Launch
						</div>
					</Link>
				</Clickable>
				<Clickable onClick={onNav}>
					<Link
						style={styles.link}
						to='/upcoming'
					>
						<div
							style={styles.button}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div
								style={styles.buttonGlow}
								className='glow'
							></div>
							<i
								className='material-icons'
								style={{ fontSize: '14px', marginRight: '6px' }}
							>
								schedule
							</i>
							Upcoming
						</div>
					</Link>
				</Clickable>
				<Clickable onClick={onNav}>
					<Link
						style={styles.link}
						to='/history'
					>
						<div
							style={styles.button}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div
								style={styles.buttonGlow}
								className='glow'
							></div>
							<i
								className='material-icons'
								style={{ fontSize: '14px', marginRight: '6px' }}
							>
								timeline
							</i>
							History
						</div>
					</Link>
				</Clickable>
			</nav>
		</header>
	);
};

export default Header;
