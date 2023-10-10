FROM node:20-slim

WORKDIR /home/node/app

# USER node
# add this line
RUN apt-get update -y && apt-get install -y openssl

CMD [ "tail", "-f", "/dev/null"]