# Deploy to Digital Ocean server

1. `bin/deploy`
2. `ssh $SSH_USER@$SSH_HOST`
3. `cd /var/www/stonks/`
4. `nvm use`
5. `npm ci` (if necessary)
6. `npm run start:docker`
