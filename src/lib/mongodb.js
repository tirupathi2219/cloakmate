// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI

// const options = {};

// let client;
// let clientPromise;
// if(!process.env.MONGODB_URI) {
//     throw new Error('please add your mongo uri to .env.local')
// }

// if(process.env.NODE_ENV === 'development') {
//     console.log("new connection again ::::::::")
//     if(!global._mongoClientPromise) {
//         client = new MongoClient(uri, options)
//         global._mongoClientPromise = client.connect();
//     }
//     clientPromise = global._mongoClientPromise
// } else {
//     client = new MongoClient(uri, options) 
//     clientPromise = client.connect()
// }

// export async function connectToDatabase() {
//     return clientPromise.then((client) => {
//         console.log("27::::", client)
//         return  client.db()
//     });
//   }

// src/lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client;
let db;

export async function connectToDatabase() {
    if (client && db) {
        return { client, db };
    }
    console.log('43::::', uri)
    // Create a new MongoClient and connect to the database
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db(); // You can specify your database name here if not in the URI

    return { client, db };
}