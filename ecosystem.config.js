require('dotenv').config();
// const path = require('path');
// const os = require('os');

module.exports = {
  apps: [
    // {
    //   name: 'api',
    //   script: './api/index.js',
    //   watch: false,
    //   instances: 1,
    // },
    {
      name: 'scripts',
      script: 'npm',
      args: ['start'],
      watch: false,
      instances: 1,
      // error_file: path.resolve(os.tmpdir(), 'stonks.stderr.log'),
      // out_file: path.resolve(os.tmpdir(), 'stonks.stdout.log'),
      env: {
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
      'pre-deploy-local': 'npm test && bin/test',
      'post-deploy': 'npm ci --production && docker-compose up -d',
      // 'post-deploy': 'npm ci --production && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
