const jwt = require("jwt-simple");

const expiration = 86400; // expiration 24 hrs in seconds

function createToken(user, secret){
	const token = jwt.encode({
		sess_exp: Date.now() + expiration,
		iss: user._id
	}, secret, "HS512");
	return `JWT ${token}`;
}

module.exports = { "createToken": createToken };
