import * as dotenv from "dotenv";

dotenv.config();
let path = `${__dirname}/.env`;
dotenv.config({ path: path });

export const KAFKA_HOST: string = process.env.KAFKA_HOST ? process.env.KAFKA_HOST.toString() : '';
export const KAFKA_TOPIC: string = process.env.KAFKA_TOPIC ? process.env.KAFKA_TOPIC.toString() : '';
