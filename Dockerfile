FROM node:18.12.1

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

ENV PORT=5000
ENV MONGO_PASS=harsh
ENV NODE_ENV=production

EXPOSE 5000

CMD [ "yarn", "start" ]
