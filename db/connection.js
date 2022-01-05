const pouchdb = require('pouchdb');
const { v4: uuidv4 } = require('uuid');

const db = new pouchdb('transactions');

module.exports = db;

//this file create the "connection" to the database