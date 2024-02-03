const [Client] = [require("pg").Client];

async function testDbConnection() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
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
