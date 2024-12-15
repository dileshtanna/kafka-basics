const { Kafka } = require('kafkajs')

const name = process.argv[2];

const kafka = new Kafka({
    clientId: 'kafka-basics-demo',
    brokers: ['<local-ip-address>:9092']
})

const run = async () => {
    const producer = kafka.producer();
    await producer.connect()

    const result = await producer.send({
        topic: "Users",
        messages: [
            {
                value: JSON.stringify({
                    name
                })
            }
        ]
    })

    console.log("New Message Produced", result)

    await producer.disconnect()
}

run().catch(console.error)