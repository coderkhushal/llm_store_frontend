FROM node:20

WORKDIR /app

copy package*.json . 

RUN npm install

ENV NEXT_PUBLIC_BASE_URL  = $NEXT_PUBLIC_BASE_URL
ENV AWS_S3_BASE_URL = $AWS_S3_BASE_URL
RUN npm install pm2 -g

COPY . .
RUN npm run build 

EXPOSE 3000

CMD ["pm2 start npm ", " --name 'llmstore_frontend' -- start"]
