const _config = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  FRONTEND_URL: process.env.FRONTEND_URL,
  ENV: process.env.ENV,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
  DOMAIN: process.env.DOMAIN,
};

const config = Object.freeze(_config);
export default config;
