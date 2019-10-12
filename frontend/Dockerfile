FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts --silent

CMD ["npm", "start"]
