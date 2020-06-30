require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'scripts',
      script: './scripts/stonks.js',
      watch: false,
      instances: 1,
      combine_logs: true,
      env: {
        NODE_ENV: 'development',
        DEBUG: 'stonks:*',
        ROBINHOOD_USERNAME: process.env.ROBINHOOD_USERNAME,
        ROBINHOOD_PASSWORD: process.env.ROBINHOOD_PASSWORD,
        ROBINHOOD_DEVICE_TOKEN: process.env.ROBINHOOD_DEVICE_TOKEN,
      },
      env_production: {
        NODE_ENV: 'production',
        DEBUG: 'stonks:*',
        ROBINHOOD_USERNAME: process.env.ROBINHOOD_USERNAME,
        ROBINHOOD_PASSWORD: process.env.ROBINHOOD_PASSWORD,
        ROBINHOOD_DEVICE_TOKEN: process.env.ROBINHOOD_DEVICE_TOKEN,
      },
    },
  ],
  deploy: {
    production: {
      user: process.env.SSH_USER,
      host: process.env.SSH_HOST,
      ref: 'origin/master',
      repo: 'https://github.com/nielse63/stonksjs.git',
      path: process.env.SSH_ROOT,
      'post-deploy': 'npm ci && pm2 startOrRestart ecosystem.config.js --update-env --env production',
    },
  },
};
