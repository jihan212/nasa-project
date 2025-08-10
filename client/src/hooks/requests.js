const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
	try {
		console.log('Fetching planets from:', `${API_URL}/planets`);
		const response = await fetch(`${API_URL}/planets`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log('Planets data received:', data);
		return data;
	} catch (error) {
		console.error('Error fetching planets:', error);
		return [];
	}
}

async function httpGetLaunches() {
	// TODO: Once API is ready.
	// Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
	// TODO: Once API is ready.
	// Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
	// TODO: Once API is ready.
	// Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
