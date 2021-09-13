const bcrypt = require("bcrypt")
const User = require("../model/schema")
const jwt = require("jsonwebtoken")

// controller for login
exports.login = async (req, res) => {
	try {
		// validate request
		if (!req.body) {
			return res
				.status(406)
				.json({err: "You have to fill the email and password"})
		}
		// get user data
		const {email, password} = req.body

		// validation
		if (!email || !password) {
			return res.status(406).json({err: "Not have a fill be entered"})
		}

		const user = await User.findOne({email})

		if (!user) {
			return res
				.status(406)
				.json({error: "No account with this email " + email})
		}

		// compare password
		const isMatch = bcrypt.compareSync(password, user.password)

		if (!isMatch) {
			return res.status(406).json({error: "Password Wrong"})
		}

		// create jwt token
		const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

		res.json({token, username: user.username, email})
	} catch (error) {
		res.status(500).json({err: error.message || "Error while login"})
	}
}
// controller for register
exports.registerUser = (req, res) => {
	try {
		// validate request
		if (!req.body) {
			console.log(req.body)
			return res.status(406).json({err: "You have to fill the register form"})
		}

		let {email, password, passwordCheck, username} = req.body

		if (!email || !password || !passwordCheck || !username) {
			return res.status(406).json({err: "Not all field have been entered"})
		}

		if (password !== passwordCheck) {
			return res
				.status(406)
				.json({err: "Password must be same with password confirmation"})
		}

		if (passwordCheck.length < 8) {
			res
				.status(406)
				.json({err: "The password need to be at least 8 charactesrs long"})
		}

		// hasing password
		password = bcrypt.hashSync(password, 10)

		// using document structure
		// const newUser = new User({email, password, username})
		// newUser
		// 	.save(newUser)
		// 	.then(resgister => {
		// 		res.json(resgister)
		// 	})
		// 	.catch(err => {
		// 		res.status(406).json({error: err.message})
		// 	})

		User.create({email, password, username}, (err, register) => {
			if (err) return res.status(406).json({error: err.message})
			res.json(register)
		})
	} catch (error) {
		res.status(500).json({
			err: error.message || "Error while registration"
		})
	}
}

// delete user controller
exports.delete = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.user_id)
		res.json({message: "User Deleted Successfully...!"})
	} catch (err) {
		res.status(500).json({error: err.message})
	}
}
