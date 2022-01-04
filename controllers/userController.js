const { getUsersDB, getSingleUserDB, addToBalance} = require('../models/userModel');

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

exports.creditPlayer = (req, res, next) => {
    let { userId } = req.params;
    const {amount} = req.body;

    return addToBalance(userId, amount).then((user) => {
        // console.log(user);
        res.status(200).send(user)
		});
}
