const jwt = require('jsonwebtoken');

const jwtTokens = ({ username, password }) => {
	const user = { username, password };
	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '15s',
	});
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: '1h',
	});
	return { accessToken, refreshToken };
};

module.exports = jwtTokens;
