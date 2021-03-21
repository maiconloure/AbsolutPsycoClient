FROM node:14.16.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
RUN yarn install
RUN yarn global add react-scripts@4.0.3

COPY . ./