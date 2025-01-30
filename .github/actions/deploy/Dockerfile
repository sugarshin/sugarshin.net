FROM alpine:3.20@sha256:31687a2fdd021f85955bf2d0c2682e9c0949827560e1db546358ea094f740f12

RUN apk add --no-cache \
    bash \
    git \
    openssh-client \
    ca-certificates

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
