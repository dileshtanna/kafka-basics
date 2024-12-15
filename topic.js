const { Kafka } = require('kafkajs')

const topic = process.argv[2];

const kafka = new Kafka({
    clientId: 'kafka-basics-demo',
    brokers: ['<local-ip-address>:9092']
})

const run = async () => {
    const admin = kafka.admin();
    await admin.connect()

    const topicCreated = await admin.createTopics({
        topics: [{ topic, numPartitions: 2 }]
    })

    await admin.disconnect();

    console.log(`Topic ${topic} Created`, topicCreated);
}

run().catch(console.error)