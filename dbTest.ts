const { Client } = require("pg");

async function testDbConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();
    console.log("Successfully connected to the database");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  } finally {
    await client.end();
  }
}

testDbConnection();
