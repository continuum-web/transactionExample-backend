const pouchdb = require('pouchdb');
const { v4: uuidv4 } = require('uuid');
const db = require('./connection');

//This is random generated use data including name email address and a random balance between 0 and 100
const data = [
	{
		name: 'Ifeoma Wilder',
		email: 'in.aliquet@aol.net',
		balance: '72',
	},
	{
		name: 'Rhea Mcgee',
		email: 'at.iaculis.quis@icloud.edu',
		balance: '14',
	},
	{
		name: 'Melinda Baird',
		email: 'mauris.erat@google.org',
		balance: '16',
	},
	{
		name: 'Branden Armstrong',
		email: 'lacus.pede.sagittis@aol.edu',
		balance: '100',
	},
	{
		name: 'Kyla Duncan',
		email: 'duis@google.ca',
		balance: '1',
	},
	{
		name: 'Leonard Villarreal',
		email: 'pellentesque.eget@google.edu',
		balance: '40',
	},
	{
		name: 'Delilah Hart',
		email: 'eget.volutpat.ornare@yahoo.org',
		balance: '19',
	},
	{
		name: 'Xanthus Kennedy',
		email: 'blandit.enim.consequat@icloud.org',
		balance: '68',
	},
	{
		name: 'Gary Lowery',
		email: 'tincidunt.aliquam@icloud.couk',
		balance: '96',
	},
	{
		name: 'Kennan Donaldson',
		email: 'suspendisse@hotmail.org',
		balance: '11',
	},
	{
		name: 'Dominic Leach',
		email: 'diam.eu@google.ca',
		balance: '42',
	},
	{
		name: 'Jonas Giles',
		email: 'aliquet@yahoo.com',
		balance: '41',
	},
	{
		name: 'Kirby Barnett',
		email: 'sit.amet@google.ca',
		balance: '62',
	},
	{
		name: 'Joy Moss',
		email: 'tristique.senectus@yahoo.org',
		balance: '39',
	},
	{
		name: 'Kristen Sharpe',
		email: 'magna.praesent@google.net',
		balance: '17',
	},
	{
		name: 'Owen Barker',
		email: 'velit@hotmail.com',
		balance: '98',
	},
	{
		name: 'Carl Pruitt',
		email: 'convallis.in@hotmail.org',
		balance: '46',
	},
	{
		name: 'Richard Morton',
		email: 'a.enim.suspendisse@yahoo.org',
		balance: '85',
	},
	{
		name: 'Oprah Dillard',
		email: 'praesent.eu@yahoo.edu',
		balance: '22',
	},
	{
		name: 'Emerald Clements',
		email: 'ante.vivamus.non@aol.net',
		balance: '9',
	},
];

//we then format the data, to include a random generates id using the uuidv4 library (The id (_id) is require by pouchDB), and adds the transaction history object 
const formatted = data.map(person => {
	const { name, email, balance } = person;
	newPerson = { _id: uuidv4(), name, email, balance, transactions: {} };
	return newPerson;
});
//once the data is formatted, we loop through each one and add it to the DB
formatted.forEach(person => {
	db.put(person);
});

// uncomment to check database is seeded
// db.allDocs({
// 	include_docs: true,
// 	attachments: true,
// })
// 	.then(function (result) {
// 		console.log(result.rows)
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});
