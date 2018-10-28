module.exports = event => {

    console.log("Received event: " + JSON.stringify(event));

    var Redis = require('ioredis');

    var redis_address = "redis://:"+(process.env.REDIS_PASSWORD||'')+"@"+process.env.REDIS_HOST_NAME+":"+(process.env.REDIS_PORT || 6379);

    var redis = new Redis(redis_address);

    var message = JSON.stringify(event.eventBody.message);

    console.log("Date value: "+ event.eventBody.message['date']);
    redis.zadd('messages', event.eventBody.message['date'], message);
    redis.publish('messages', message);

    console.log("Published message to redis")

}