const {
	getUsersDB,
	getSingleUserDB,
	addToBalance,
	removeFromBalance,
} = require('../models/userModel');

// the controller to get users and reply to the Client
exports.getUsers = (req, res, next) => {
	const users = getUsersDB();
	users.then(rows => {
		// console.log(typeof rows);
		res.status(200).send(rows);
	});
};

//This controller get the details of a single user
exports.getSingleUser = (req, res, next) => {
	let { userId } = req.params;

	return getSingleUserDB(userId).then(user => {
		res.status(200).send(user);
	});
};
//this is the controller to add and remove from the players balance
exports.alterPlayerCredit = (req, res, next) => {
	let { userId } = req.params;
    const { type, amount } = req.body;
   
    if (type === "credit") { 
        return addToBalance(userId, amount).then(user => {
		// console.log(user);
		res.status(200).send(user);
	});
    }
    else if (type === 'debit') {
			return removeFromBalance(userId, amount).then(user => {
				res.status(200).send(user);
			});
		}

	
};


