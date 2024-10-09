import mongoose from "mongoose"

export const handleDB = () => {
   return  mongoose.connect(process.env.MONGODB_URI).then((db) => {
        console.log('DATABASE CONNECTED....', db)
        return db
    }).catch(err => {
        console.log("DB CONNECTION ISSUE", err)
    })
}