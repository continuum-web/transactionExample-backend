const {
	getUsersDB,
	getSingleUserDB,
	addToBalance,
	removeFromBalance,
} = require('../models/userModel');

exports.getUsers = (req, res, next) => {
	const users = getUsersDB();
	users.then(rows => {
		console.log(rows);
		res.status(200).send(rows);
	});
};

//e5a00ad6-76ed-43c3-8f6e-446e4bd82800

exports.getSingleUser = (req, res, next) => {
	let { userId } = req.params;

	return getSingleUserDB(userId).then(user => {
		res.status(200).send(user);
	});
};

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


