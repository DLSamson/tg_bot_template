import { configDotenv } from 'dotenv';

const config = configDotenv().parsed || {};

export default config;