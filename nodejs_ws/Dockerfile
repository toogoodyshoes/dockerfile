FROM alpine:3.14

WORKDIR /nodejs_ws

COPY  package.json .
COPY ./src ./src

RUN <<EOF
apk add --update nodejs npm
npm install
EOF

CMD [ "npm" ,"start" ]

EXPOSE 3030