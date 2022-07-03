FROM node:18.4.0-alpine

WORKDIR /usr/src/payments

COPY payments/package.json .
RUN npm install
COPY payments .

EXPOSE 3000
CMD [ "node", "index.js" ]
