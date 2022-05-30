import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: Number(process.env.PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dbport: Number(process.env.POSTGRES_PORT),
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  awsRDS: process.env.AWS_RDS,
  awsRegion: process.env.AWS_REGION,
  awsProfile: process.env.AWS_PROFILE,
  awsMediaBucket: process.env.AWS_BUCKET,
  url: process.env.LOCAL_URL,
  awsURL: process.env.AWS_URL,
  jwt: {
    secret: process.env.JWT_SECRET
  }
};
