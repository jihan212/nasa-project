const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL = `mongodb+srv://root:takdir9095@bot.txta0.mongodb.net/?retryWrites=true&w=majority&appName=bot`;

const server = http.createServer(app);

mongoose
	.connect(MONGO_URL)
	.then(() => {
		console.log('MongoDB connection ready!');
	})
	.catch((err) => {
		console.error(err);
	});

async function startServer() {
	await mongoose.connect(MONGO_URL);

	await loadPlanetsData();

	server.listen(PORT, () => {
		console.log(`Listening on the post ${PORT}`);
	});
}

startServer();
