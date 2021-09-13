const mongoose = require("mongoose")

const connect = async () => {
	try {
		// mongodb connection
		const con = await mongoose.connect(process.env.MONGO_URI)

		console.log(`MongoDB Connected ${con.connection.host}`)
	} catch (err) {
		console.log(err.message)
		process.exit(1)
	}
}

module.exports = connect
