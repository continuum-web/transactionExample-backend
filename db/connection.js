const pouchdb = require('pouchdb');
const { v4: uuidv4 } = require('uuid');

const db = new pouchdb('transactions');

module.exports = db;