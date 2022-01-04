const db = require('../db/connection');
const { v4: uuidv4 } = require('uuid');

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

exports.getSingleUserDB = id => {
	return db.get(id).then(result => {
		return result;
	});
};

exports.addToBalance = (id, amount, type) => {
	return db
		.get(id)
		.then(doc => {
			balance = parseInt(doc.balance);
			doc.balance = balance + amount;
            newBalance = doc.balance + amount;
			doc.transactions[uuidv4()] = {
				balance,
				newBalance,
				amount,
				type: 'credit',
			};

			return db.put(doc);
		})
		.then(() => {
			return db.get(id);
		})
		.then(doc => {
			return doc;
		});
};

exports.removeFromBalance = (id, amount) => {
    return db
			.get(id)
			.then(doc => {
				console.log(doc);
				balance = parseInt(doc.balance);
				doc.balance = balance - amount;
				newBalance = doc.balance - amount;
				console.log(typeof doc.transactions);
				doc.transactions[uuidv4()] = {
					balance,
					newBalance,
					amount,
					type: 'debit',
				};

				return db.put(doc);
			})
			.then(() => {
				return db.get(id);
			})
			.then(doc => {
				
				return doc;
			});
};