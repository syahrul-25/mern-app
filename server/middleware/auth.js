const jwt = require("jsonwebtoken")

// create a middleware
const auth = (req, res, next) => {
	const token = req.header("x-access-token")

	if (!token)
		return res
			.status(406)
			.json({error: "No authenticatiion token, authorization denied"})

	const verified = jwt.verify(token, process.env.JWT_SECRET)

	if (!verified)
		return res
			.status(406)
			.json({error: "Token verificatiion failed, authorization denied"})

	console.log("token : " + token)
	console.log("verified : " + verified)
	console.log("verified.id : " + verified.id)
	req.user_id = verified.id
	next()
}

module.exports = auth
