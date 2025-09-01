const { getAllPlanets } = require('../../models/planets.model');

async function httpGetAllPlanets(req, res) {
	const allPlanets = await getAllPlanets();
	// Transform the data to match frontend expectations
	const formattedPlanets = allPlanets.map((planet) => planet.keplerName);
	return res.status(200).json(formattedPlanets);
}

module.exports = {
	httpGetAllPlanets,
};
