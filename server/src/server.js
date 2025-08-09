const express = require('express');
const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
