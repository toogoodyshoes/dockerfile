FROM alpine:3.14

WORKDIR /nodejs_ws

RUN <<EOF
apk update
apk add nodejs npm
npm install
addgroup -g 1000 nodeuser
adduser -u 1000 -G nodeuser -D dev1
rm -rf /var/cache/apk/*
EOF

USER dev1

COPY  . .

CMD [ "npm" ,"start" ]

EXPOSE 3030