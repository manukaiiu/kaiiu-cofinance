FROM node:18

WORKDIR /app

COPY package*.json ./

# ENV NODE_ENV=development

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]