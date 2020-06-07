FROM node:13.12.0

ENV NODE_ENV production
ENV NPM_CONFIG_PREFIX /home/node/.npm-global
ENV PATH $PATH:/home/node/.npm-global/bin

# Create app directory
RUN mkdir -p /var/www/stonks
WORKDIR /var/www/stonks

# Bundle app source
COPY . /var/www/stonks

RUN npm ci --production

EXPOSE 8081

CMD "npm start"
