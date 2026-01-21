import mongoose from 'mongoose'

const connectDb = async (mongo_url) => {
    try {
        const conn = await mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // server location timed out ms 5000, // optional time out config 
        })

        console.log(`Mongodb connected : ${conn.connection.host}`)
    } catch (error) {
        console.error(`Mongodb connection failed : ${error.message}`)
        process.exit(1); //stop server if DB fails 
    }
}