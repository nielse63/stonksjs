FROM node:13.12.0

ENV NODE_ENV production
ENV NPM_CONFIG_PREFIX /home/node/.npm-global
ENV PATH $PATH:/home/node/.npm-global/bin

# Create app directory
RUN mkdir -p /var/www/stonks
WORKDIR /var/www/stonks

# Install Gekko dependencies
# COPY package.json .
# COPY package-lock.json .
# RUN npm install --production && \
#     npm install --production redis@0.10.0 talib@1.0.2 tulind@0.8.7 pg && \
#     npm cache clean --force

# Install Gekko Broker dependencies
# WORKDIR exchange
# COPY exchange/package.json .
# RUN npm install --production && \
#     npm cache clean --force
# WORKDIR ../

# Bundle app source
COPY . /var/www/stonks

# Install GYP dependencies globally, will be used to code build other dependencies
RUN npm ci --production

EXPOSE 8081
# RUN chmod +x /var/www/stonks/docker-entrypoint.sh
# ENTRYPOINT ["/var/www/stonks/docker-entrypoint.sh"]

CMD "npm start"
