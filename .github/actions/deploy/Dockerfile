FROM alpine:3.20

RUN apk add --no-cache \
    bash \
    git \
    openssh-client \
    ca-certificates

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
