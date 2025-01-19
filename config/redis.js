// const {createClient} = 'redis'


// async function redisConnect(){
//     const client = createClient({
//         username: 'default',
//         password: 'KqaMy80aSC6vL5t1SAQfJ76nylDkstL9',
//         socket: {
//             host: 'redis-16941.c240.us-east-1-3.ec2.redns.redis-cloud.com',
//             port: 16941
//         }
//     });
    
//     client.on('error', err => console.log('Redis Client Error', err));
    
//     await client.connect();
//     return client
    
// }

// redisConnect();
const { createClient } = require('redis'); // Properly import createClient

async function redisConnect() {
    const client = createClient({
        username: 'default',
        password: 'KqaMy80aSC6vL5t1SAQfJ76nylDkstL9',
        socket: {
            host: 'redis-16941.c240.us-east-1-3.ec2.redns.redis-cloud.com',
            port: 16941
        }
    });

    client.on('error', (err) => console.log('Redis Client Error:', err));

    await client.connect();
    console.log('Connected to Redis successfully');
    return client;
}

// Call the function
redisConnect();
