const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
	keplerName: {
		type: String,
		required: true,
		unique: true,
	},
	kepid: {
		type: String,
		required: true,
	},
	koi_prad: {
		type: Number,
		required: true,
	},
	koi_insol: {
		type: Number,
		required: true,
	},
	koi_disposition: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Planet', planetSchema);
