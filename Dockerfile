FROM node:14.16.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./