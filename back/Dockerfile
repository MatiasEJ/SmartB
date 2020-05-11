
FROM node:carbon

WORKDIR /usr/src/smart-brain-api

ADD package.json .

RUN npm install

EXPOSE 3000

CMD ["/bin/bash"]

COPY ./ ./
