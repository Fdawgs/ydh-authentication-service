FROM node:lts-alpine

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# Update and upgrade packages
RUN apk -U upgrade

# Create unprivileged user to run app and prevent
# privilege escalation attacks
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /usr/app
RUN mkdir logs && chown -R appuser:appgroup logs
COPY package.json .
COPY package-lock.json .
COPY .env.${NODE_ENV} .
COPY ./src ./src

RUN npm install && npm cache clean --force
USER appuser
CMD ["npm", "start"]