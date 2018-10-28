#!/usr/bin/env bash

riff service delete redis-chat-message-recorder

riff function create node redis-chat-message-recorder \
    --git-repo https://github.com/doddatpivotal/redis-chat-message-recorder.git \
    --artifact redis-chat-message-recorder.js \
    --env REDIS_HOST_NAME=redis-chat-redis-service \
    --image $DOCKER_ID/redis-chat-message-recorder \
    --verbose

