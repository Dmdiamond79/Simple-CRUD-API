FROM node:lts-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]

