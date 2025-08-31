const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const planets = require('./planets.mongo');

function isHabitablePlanet(planet) {
	return (
		planet['koi_disposition'] === 'CONFIRMED' &&
		planet['koi_insol'] > 0.36 &&
		planet['koi_insol'] < 1.11 &&
		planet['koi_prad'] < 1.6
	);
}

function loadPlanetsData() {
	return new Promise(async (resolve, reject) => {
		// Check if planets are already loaded
		const existingPlanets = await getAllPlanets();
		console.log(
			`📊 Current database state: ${existingPlanets.length} planets found`
		);
		if (existingPlanets.length > 0) {
			console.log(
				`⏭️ Skipping CSV load - ${existingPlanets.length} habitable planets already loaded!`
			);
			resolve();
			return;
		}

		console.log('🚀 Starting CSV processing for new planets...');

		fs.createReadStream(
			path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')
		)
			.pipe(
				parse({
					comment: '#',
					columns: true,
					relax_quotes: true,
					relax_column_count: true,
					skip_empty_lines: true,
				})
			)
			.on('data', async (data) => {
				if (isHabitablePlanet(data)) {
					console.log(
						`🌍 Found habitable planet: ${
							data['kepler_name'] || 'unnamed'
						} (${data['kepid']})`
					);
					await savePlanet(data);
				}
			})
			.on('error', (err) => {
				console.log(err);
				reject(err);
			})
			.on('end', async () => {
				const planetsFound = await getAllPlanets();
				const countPlanetsFound = planetsFound.length;
				console.log(`${countPlanetsFound} habitable planets found!`);
				resolve();
			});
	});
}

async function getAllPlanets() {
	return await planets.find({});
}

async function savePlanet(planet) {
	try {
		// Only save if kepler_name exists
		if (!planet['kepler_name']) {
			console.log(
				'Skipping planet without kepler_name:',
				planet['kepid']
			);
			return;
		}

		console.log(`Saving planet: ${planet['kepler_name']}`);

		const result = await planets.updateOne(
			{
				keplerName: planet['kepler_name'],
			},
			{
				keplerName: planet['kepler_name'],
			},
			{
				upsert: true,
			}
		);

		if (result.upsertedCount > 0) {
			console.log(`✅ Inserted new planet: ${planet['kepler_name']}`);
		} else if (result.modifiedCount > 0) {
			console.log(`🔄 Updated existing planet: ${planet['kepler_name']}`);
		} else {
			console.log(`⏭️ Planet already exists: ${planet['kepler_name']}`);
		}
	} catch (err) {
		console.error(
			`❌ Could not save planet ${planet['kepler_name']}: ${err}`
		);
	}
}

module.exports = {
	loadPlanetsData,
	getAllPlanets,
};
