const pgp = require("pg-promise")();

const db = pgp({
  host: process.env.local.POSTGRES_HOST,
  port: 5432,
  database: process.env.local.POSTGRES_DATABASE,
  user: process.env.local.POSTGRES_USER,
  password: process.env.local.POSTGRES_PASSWORD,
});

async function authenticateUser(username, password) {
  const user = await db.oneOrNone("SELECT * FROM users WHERE username = $1", [
    username,
  ]);

  if (user && user.password === password) {
    return user;
  } else {
    throw new Error("Invalid username or password");
  }
}

module.exports = { db, authenticateUser };
