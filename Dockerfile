FROM node:16.18-alpine3.15 AS build-step

WORKDIR /challenge-zaracom-js
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.23.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /challenge-zaracom-js/build /usr/share/nginx/html
