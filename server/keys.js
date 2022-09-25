module.exports = {
  pgUser: process.env.PGUSER || "postgres",
  pgHost: process.env.PGHOST || "postgres",
  pgDatabase: process.env.PGDATABASE || "postgres",
  pgPassword: process.env.PGPASSWORD || "postgres_password",
  pgPort: process.env.PGPORT || "5432",
};
