# build-stage
FROM node:14.16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# dev-stage
FROM node:14.16 as dev-stage
WORKDIR /app
COPY --from=build-stage /app .
EXPOSE 8080
CMD ["npm", "run", "serve"]