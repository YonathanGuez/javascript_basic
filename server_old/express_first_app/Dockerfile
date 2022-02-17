FROM node:12.16.1-alpine3.9
RUN mkdir -p /test
WORKDIR /test
ADD . /test
RUN yarn
CMD [ "yarn", "start" ]
EXPOSE 3000