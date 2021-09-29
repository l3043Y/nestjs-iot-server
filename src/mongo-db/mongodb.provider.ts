import { MongoClient } from "mongodb";
import { MONGODB_PROVIDER } from "../constants";

export const mongoDbProviders = [
  {
    provide: MONGODB_PROVIDER,
    useFactory: async () => new Promise((resolve, reject) => {
      MongoClient.connect('mongodb://localhost:27000',
    //   { useUnifiedTopology: true },
      (error, client) => {
        if (error) {
          reject(error);
        } else {
          resolve(client.db('iot'));
        }
      });
    })
  },
];