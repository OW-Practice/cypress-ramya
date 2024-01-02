import config from '../config.json';
import dotenv from 'dotenv';

dotenv.config();

export function getBaseUrl(): string {
    const env = process.env.environment || 'dev';
    return (config as Record<string, { baseUrl: string }>)[env]?.baseUrl || 'defaultBaseUrl';
}
