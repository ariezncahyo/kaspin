
FROM node:11-alpine

RUN mkdir /usr/lib/backend-kaspin

WORKDIR /usr/lib/backend-kaspin
COPY package.json ./
RUN npm install

ARG PORT

WORKDIR /usr/lib/backend-kaspin
COPY . .
RUN npm run build
RUN chown -R node:node /usr/lib/backend-kaspin

EXPOSE 6000
CMD ["npm", "run", "start"]