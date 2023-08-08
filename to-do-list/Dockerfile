FROM node:14
WORKDIR /to-do-list/src/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]