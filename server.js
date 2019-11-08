const express = require('express');
// const projectRouter = require('./data/projects/project-router');

const server = express()
const projectRouter = require('./data/projects/project-router');

server.use(express.json());
server.use('/api', projectRouter);

module.exports = server;