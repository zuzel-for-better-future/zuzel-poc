FROM node:18.12.1-alpine

EXPOSE 3000

COPY package.json /app/
COPY ./src /app/src/

WORKDIR /app

RUN npm install --omit=dev

CMD ["npm", "start"]