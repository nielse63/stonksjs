require('dotenv').config();
const path = require('path');

module.exports = {
  apps: [{
    name: 'api',
    script: './api/index.js',
    watch: false,
    instances: 1,
    error_file: path.resolve(__dirname, 'logs/stonks.stderr.log'),
    out_file: path.resolve(__dirname, 'logs/stonks.stdout.log'),
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
  deploy: {
    production: {
      user: process.env.SSH_USER,
      host: process.env.SSH_HOST,
      ref: 'origin/master',
      repo: 'https://github.com/nielse63/stonksjs.git',
      path: process.env.SSH_ROOT,
      'pre-deploy-local': 'npm test && bin/test',
      'post-deploy': 'npm ci --production && docker-compose up -d',
      // 'post-deploy': 'npm ci --production && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
