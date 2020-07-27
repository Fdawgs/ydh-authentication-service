FROM node:lts-alpine

WORKDIR /usr/app
COPY package.json .
COPY yarn.lock .
COPY .env .
COPY ./src ./src

RUN yarn install
CMD ["yarn", "start"]