import { routes, deploymentEnv, type VercelConfig } from '@vercel/config/v1';
 
export const config: VercelConfig = {
  buildCommand: 'npm run build && env'
};
