import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default prisma




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://mongo:nokia920@serverlessinstance1.c572s.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });