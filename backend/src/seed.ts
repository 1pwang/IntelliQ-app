import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.URL!;
const dbName = 'intelliQDb';
const client = new MongoClient(uri);

async function createIndexAndSeed() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(dbName);
    const usersCollection = db.collection('users');
    
    // Create unique index on email field if it doesn't exist
    await usersCollection.createIndex({ email: 1 }, { unique: true });
    console.log('Created unique index on email field');

    // Seed initial user data
    const initialUsers = [
      { email: 'test@intelliq.com', password: 'asdfasdf' }
    ];

    // Insert initial users, ignoring duplicates
    await usersCollection.insertMany(initialUsers)
    
    console.log('Database seeded with initial data');
  } catch (error) {
    console.error('Error creating index and seeding data:', error);
  } finally {
    await client.close();
  }
}

createIndexAndSeed();
