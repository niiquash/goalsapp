// Use mongoose to connect to the database
// Mongoose functions are asynchronous
const mongoose = require('mongoose')

const connectDB = async = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected ${connect.connection.host}`.yellow.underline)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;