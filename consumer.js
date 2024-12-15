const { Kafka } = require('kafkajs')

const groupId = process.argv[2];
const topic = process.argv[3];

const kafka = new Kafka({
    clientId: 'kafka-basics-demo',
    brokers: ['<local-ip-address>:9092']
})

const run = async () => {
    const consumer = kafka.consumer({ groupId });
    await consumer.connect()

    await consumer.subscribe({ topic, fromBeginning: false })

    await consumer.run({
        eachMessage: ({ partition, message, topic }) => {
            console.log({
                partition,
                offset: message.offset,
                message: message.value.toString()
            });
        }
    })
}

run().catch(console.error)