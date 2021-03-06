const db = require('../db/connection');
const { v4: uuidv4 } = require('uuid');
const res = require('express/lib/response');
const { bulkDocs } = require('../db/connection');

//sends a request to the PouchDB database, this returns the entire database of users
exports.getUsersDB = () => {
	return db
		.allDocs({
			include_docs: true,
			attachments: true,
		})
		.then(result => {
			
			return result.rows;
		});
};
//This is the call to the PouchDB, to retrieve a single user and returns the result to the controller
exports.getSingleUserDB = id => {
	return db.get(id).then(result => {
		return result;
	});
};
//If the request id a POST, and a credit, this function is called, to add to the players balance, and add the transaction.
exports.addToBalance = (id, amount, type) => {
	return db
		.get(id)
		.then(doc => {
			balance = parseInt(doc.balance);
			doc.balance = balance + parseInt(amount);
			newBalance = balance + parseInt(amount);
			let newTransaction = [
				...doc.transactions,
				{
					id: uuidv4(),
					balance:newBalance,
					amount,
					type: 'credit',
				},
			];
			doc.transactions = newTransaction;

			return db.put(doc);
		})
		.then(() => {
			return db.get(id);
		})
		.then(doc => {
			return doc;
		});
};

//If the request id a POST, and a debit, this function is called, to remove from the players balance, and add the transaction.
exports.removeFromBalance = (id, amount) => {
	return db
		.get(id)
		.then(doc => {
			
			balance = parseInt(doc.balance);
			newBalance = balance - parseInt(amount);
			
			if (balance >= parseInt(amount)) {
				doc.balance = newBalance;

				let newTransaction = [
					...doc.transactions,
					{
						id: uuidv4(),
						balance:newBalance,
						amount,
						type: 'debit',
					},
				];
				doc.transactions = newTransaction;

				return db.put(doc);
			} else {
				
				return Promise.reject({ status: 400, msg: 'insufficient funds' });
			}
		})
		.then(() => {
			return db.get(id);
		})
		.then(doc => {
			return doc;
		})
		;
};
