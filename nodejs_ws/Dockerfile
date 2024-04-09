FROM alpine:3.14

# Creating a non-root user
RUN <<EOF
addgroup -g 1000 nodeuser
adduser -u 1000 -G nodeuser -D dev1
EOF

WORKDIR /nodejs_ws

COPY  . .

RUN <<EOF
apk update
apk add nodejs npm
npm install
rm -rf /var/cache/apk/*
EOF

USER dev1

CMD [ "npm" ,"start" ]

EXPOSE 3030