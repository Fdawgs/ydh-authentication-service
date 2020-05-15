FROM node:lts-alpine

WORKDIR /usr/app
COPY package.json .
COPY yarn.lock .
COPY .env.production .
COPY ./src ./src

RUN yarn install
EXPOSE 8215
CMD yarn start