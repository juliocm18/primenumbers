FROM node:12
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY dist .
CMD node index.js
EXPOSE 3000