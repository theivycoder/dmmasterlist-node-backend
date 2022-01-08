module.exports = {
    HOST: "localhost",
    USER: "amberdev",
    PASSWORD: "password",
    DB: "testuserauth",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};