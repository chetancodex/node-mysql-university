module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Welcome@123",
    DB: "university",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  