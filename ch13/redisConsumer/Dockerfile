FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .


CMD sh -c "node collector.js & \
node worker.js workerA & \
node worker.js workerB & \
node producer.js 4 f8e966d1e207d02c44511a58dccff2f5429e9a3b && \
wait"