module.exports = {
  debug: false,
  logger: {
    logLevel: "debug",
  },
  server: {
    name: "HyperLink",
    port: process.env.PORT || 3001,
  },
  sendgrid: {
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    senderEmail: process.env.SENDEREMAIL,
  },
  db: {
    name: "Local MongoDB",
    uri: process.env.DB_URI,
  },
  secrets: {
    jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
  },
  test: {
    db: {
      name: "MongoDB",
      uri: "mongodb://localhost:27017/hackthon",
    },
  },
};
