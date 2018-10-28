# Redis Chat Message Recorder
This sample requires riff v0.1.3 or later.

>To push to GCR set $DOCKER_ID to gcr.io/<project_id>

#### create from git repo, pushing image to DockerHub
```sh
riff function create node redis-chat-message-recorder \
    --git-repo https://github.com/doddatpivotal/redis-chat-message-recorder.git \
    --artifact redis-chat-message-recorder.js \
    --env REDIS_HOST_NAME=redis-chat-redis-service \
    --image $DOCKER_ID/redis-chat-message-recorder \
    --verbose
```
To set `$DOCKER_ID` do `export DOCKER_ID=your-docker-id`

#### invoke
```
riff service invoke redis-chat-message-recorder --json -- -d '{"eventName":"messageSent","eventBody":{"date":1540744601468,"username":"Patrick Kirlin","avatar":"//api.adorable.io/avatars/30/Patrick Kirlin.png","message":"potty-hello"}}'
```
