import React, { useMemo } from 'react';
import Clickable from '../components/Clickable';

const Launch = (props) => {
	const selectorBody = useMemo(() => {
		return props.planets?.map((planet) => (
			<option
				value={planet.kepler_name}
				key={planet.kepler_name}
			>
				{planet.kepler_name}
			</option>
		));
	}, [props.planets]);

	const today = new Date().toISOString().split('T')[0];

	const styles = {
		title: {
			fontSize: '28px',
			fontWeight: 'bold',
			color: '#a1ecfb',
			textAlign: 'center',
			marginBottom: '8px',
			textShadow: '0 0 40px rgba(161, 236, 251, 0.8)',
			fontFamily: 'Arial, sans-serif',
			letterSpacing: '2px',
			animation: 'glow 4s ease-in-out infinite alternate',
		},
		paragraph: {
			marginBottom: '8px',
			color: '#a1ecfb',
			lineHeight: '1.2',
			fontSize: '14px',
			textShadow: '0 0 15px rgba(161, 236, 251, 0.4)',
			animation: 'fadeInUp 1s ease-out',
		},
		form: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gridGap: '15px 20px',
			marginTop: '15px',
			padding: '15px',
			background: 'rgba(161, 236, 251, 0.05)',
			borderRadius: '15px',
			border: '1px solid rgba(161, 236, 251, 0.2)',
			position: 'relative',
			animation: 'fadeInUp 1s ease-out',
			animationDelay: '0.4s',
		},
		formGlow: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			borderRadius: '15px',
			background:
				'linear-gradient(45deg, transparent, rgba(161, 236, 251, 0.05), transparent)',
			opacity: 0.5,
			pointerEvents: 'none',
		},
		label: {
			color: '#a1ecfb',
			fontWeight: '600',
			fontSize: '13px',
			textTransform: 'uppercase',
			letterSpacing: '1px',
			marginBottom: '6px',
			textShadow: '0 0 15px rgba(161, 236, 251, 0.4)',
			position: 'relative',
			zIndex: 1,
		},
		input: {
			padding: '8px 12px',
			border: '1px solid rgba(161, 236, 251, 0.3)',
			borderRadius: '8px',
			backgroundColor: 'rgba(0, 0, 0, 0.6)',
			color: '#a1ecfb',
			fontSize: '13px',
			transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
			boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
			position: 'relative',
			zIndex: 1,
		},
		inputFocus: {
			borderColor: '#00d4ff',
			boxShadow:
				'0 0 25px rgba(0, 212, 255, 0.4), inset 0 2px 4px rgba(0,0,0,0.3)',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			transform: 'scale(1.02)',
		},
		select: {
			padding: '8px 12px',
			border: '1px solid rgba(161, 236, 251, 0.3)',
			borderRadius: '8px',
			backgroundColor: 'rgba(0, 0, 0, 0.6)',
			color: '#a1ecfb',
			fontSize: '13px',
			transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
			boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
			cursor: 'pointer',
			position: 'relative',
			zIndex: 1,
		},
		selectFocus: {
			borderColor: '#00d4ff',
			boxShadow:
				'0 0 25px rgba(0, 212, 255, 0.4), inset 0 2px 4px rgba(0,0,0,0.3)',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			transform: 'scale(1.02)',
		},
		button: {
			padding: '5px 20px',
			border: '2px solid #00d4ff',
			borderRadius: '25px',
			backgroundColor: 'rgba(0, 212, 255, 0.1)',
			color: '#00d4ff',
			cursor: 'pointer',
			fontSize: '14px',
			fontWeight: '600',
			transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
			textTransform: 'uppercase',
			letterSpacing: '1px',
			gridColumn: '1 / -1',
			justifySelf: 'center',
			boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
			position: 'relative',
			overflow: 'hidden',
			animation: 'pulse 3s ease-in-out infinite',
		},
		buttonHover: {
			transform: 'translateY(-5px) scale(1.05)',
			boxShadow: '0 20px 40px rgba(0, 212, 255, 0.5)',
			backgroundColor: 'rgba(0, 212, 255, 0.2)',
			borderColor: '#00ffff',
		},
		buttonDisabled: {
			opacity: '0.6',
			cursor: 'not-allowed',
			transform: 'none',
			animation: 'none',
		},
		loading: {
			color: '#00d4ff',
			fontStyle: 'italic',
			textAlign: 'center',
			fontSize: '14px',
			marginTop: '15px',
			textShadow: '0 0 20px rgba(0, 212, 255, 0.6)',
			animation: 'pulse 2s ease-in-out infinite',
		},
		missionIcon: {
			fontSize: '20px',
			marginRight: '10px',
			verticalAlign: 'middle',
			animation: 'float 3s ease-in-out infinite',
		},
		buttonGlow: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			borderRadius: '25px',
			background:
				'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
			opacity: 0,
			transition: 'opacity 0.3s ease',
			pointerEvents: 'none',
		},
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const planet = formData.get('planets-selector');
		const launchDate = formData.get('launch-day');
		const mission = formData.get('mission-name');

		props.submitLaunch({
			planet,
			launchDate,
			mission,
		});

		e.target.reset();
	};

	const handleButtonMouseEnter = (e) => {
		if (!props.isPendingLaunch) {
			const button = e.currentTarget;
			const glow = button.querySelector('.button-glow');

			button.style.transform = styles.buttonHover.transform;
			button.style.boxShadow = styles.buttonHover.boxShadow;
			button.style.backgroundColor = styles.buttonHover.backgroundColor;
			button.style.borderColor = styles.buttonHover.borderColor;

			if (glow) {
				glow.style.opacity = '1';
			}
		}
	};

	const handleButtonMouseLeave = (e) => {
		const button = e.currentTarget;
		const glow = button.querySelector('.button-glow');

		button.style.transform = 'translateY(0) scale(1)';
		button.style.boxShadow = styles.button.boxShadow;
		button.style.backgroundColor = styles.button.backgroundColor;
		button.style.borderColor = styles.button.borderColor;

		if (glow) {
			glow.style.opacity = '0';
		}
	};

	return (
		<div>
			<h1 style={styles.title}>🚀 Mission Launch Control</h1>
			<p style={styles.paragraph}>
				Schedule a mission launch for interstellar travel to one of the
				Kepler Exoplanets.
			</p>
			<p style={styles.paragraph}>
				Only confirmed planets matching the following criteria are
				available for the earliest scheduled missions:
			</p>
			<form
				onSubmit={handleSubmit}
				style={styles.form}
			>
				<div style={styles.formGlow}></div>
				<label
					style={styles.label}
					htmlFor='launch-day'
				>
					📅 Launch Date
				</label>
				<input
					type='date'
					id='launch-day'
					name='launch-day'
					min={today}
					max='2040-12-31'
					defaultValue={today}
					style={styles.input}
					onFocus={(e) => {
						e.target.style.borderColor =
							styles.inputFocus.borderColor;
						e.target.style.boxShadow = styles.inputFocus.boxShadow;
						e.target.style.backgroundColor =
							styles.inputFocus.backgroundColor;
						e.target.style.transform = styles.inputFocus.transform;
					}}
					onBlur={(e) => {
						e.target.style.borderColor = styles.input.borderColor;
						e.target.style.boxShadow = styles.input.boxShadow;
						e.target.style.backgroundColor =
							styles.input.backgroundColor;
						e.target.style.transform = 'scale(1)';
					}}
				/>
				<label
					style={styles.label}
					htmlFor='mission-name'
				>
					🎯 Mission Name
				</label>
				<input
					type='text'
					id='mission-name'
					name='mission-name'
					style={styles.input}
					placeholder='Enter mission name...'
					onFocus={(e) => {
						e.target.style.borderColor =
							styles.inputFocus.borderColor;
						e.target.style.boxShadow = styles.inputFocus.boxShadow;
						e.target.style.backgroundColor =
							styles.inputFocus.backgroundColor;
						e.target.style.transform = styles.inputFocus.transform;
					}}
					onBlur={(e) => {
						e.target.style.borderColor = styles.input.borderColor;
						e.target.style.boxShadow = styles.input.boxShadow;
						e.target.style.backgroundColor =
							styles.input.backgroundColor;
						e.target.style.transform = 'scale(1)';
					}}
				/>
				<label
					style={styles.label}
					htmlFor='rocket-name'
				>
					🚀 Rocket Type
				</label>
				<input
					type='text'
					id='rocket-name'
					name='rocket-name'
					defaultValue='Explorer IS1'
					style={styles.input}
					onFocus={(e) => {
						e.target.style.borderColor =
							styles.inputFocus.borderColor;
						e.target.style.boxShadow = styles.inputFocus.boxShadow;
						e.target.style.backgroundColor =
							styles.inputFocus.backgroundColor;
						e.target.style.transform = styles.inputFocus.transform;
					}}
					onBlur={(e) => {
						e.target.style.borderColor = styles.input.borderColor;
						e.target.style.boxShadow = styles.input.boxShadow;
						e.target.style.backgroundColor =
							styles.input.backgroundColor;
						e.target.style.transform = 'scale(1)';
					}}
				/>
				<label
					style={styles.label}
					htmlFor='planets-selector'
				>
					🌍 Destination Exoplanet
				</label>
				<select
					id='planets-selector'
					name='planets-selector'
					style={styles.select}
					onFocus={(e) => {
						e.target.style.borderColor =
							styles.selectFocus.borderColor;
						e.target.style.boxShadow = styles.selectFocus.boxShadow;
						e.target.style.backgroundColor =
							styles.selectFocus.backgroundColor;
						e.target.style.transform = styles.selectFocus.transform;
					}}
					onBlur={(e) => {
						e.target.style.borderColor = styles.select.borderColor;
						e.target.style.boxShadow = styles.select.boxShadow;
						e.target.style.backgroundColor =
							styles.select.backgroundColor;
						e.target.style.transform = 'scale(1)';
					}}
				>
					{selectorBody}
				</select>
				<Clickable>
					<button
						type='submit'
						disabled={props.isPendingLaunch}
						style={{
							...styles.button,
							...(props.isPendingLaunch && styles.buttonDisabled),
						}}
						onMouseEnter={handleButtonMouseEnter}
						onMouseLeave={handleButtonMouseLeave}
					>
						<div
							style={styles.buttonGlow}
							className='button-glow'
						></div>
						<span style={styles.missionIcon}>🚀</span>
						{props.isPendingLaunch
							? 'Launching...'
							: 'Launch Mission'}
					</button>
				</Clickable>
				{props.isPendingLaunch && (
					<div style={styles.loading}>
						⏳ Mission launch sequence initiated...
					</div>
				)}
			</form>
		</div>
	);
};

export default Launch;
