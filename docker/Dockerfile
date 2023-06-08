FROM node:18.12.1-alpine

EXPOSE 3000

COPY package.json /app/
COPY index.js /app/
COPY ./src /app/src/
COPY ./public /app/public/

WORKDIR /app

RUN npm install --omit=dev

CMD ["npm", "start"]