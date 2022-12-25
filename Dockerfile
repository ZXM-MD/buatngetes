FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm install qrcode-terminal

COPY . .

EXPOSE 5000

CMD ["node", "node . --db 'mongodb+srv://mongodb-khoiyrul:khoiyrulbotz122112211221@cluster0.da5wkgw.mongodb.net/?retryWrites=true&w=majority"]
