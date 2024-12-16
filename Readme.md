# 🚀 Kafka Crash Course: From Zero to Hero

Want to learn Apache Kafka but don’t know where to start? This crash course is your ultimate guide to understanding Kafka’s core concepts, architecture, and real-world applications

Watch the video here: https://youtu.be/ZwXXzzoXAT0

💡 Why Learn Kafka?
Kafka powers the biggest tech giants, enabling seamless data streaming and real-time analytics. If you’re a developer, data engineer, or tech enthusiast, mastering Kafka is a game-changer for your career!

For more such content related do like, comment and subscribe my channel https://www.youtube.com/@dileshtanna

# Docker Commands For Setting Up Kafka with Zookeeper

Install Zookeeper
`docker run --name zookeeper -p 2181:2181 zookeeper`

Install Kafka
`docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<local-ip-address>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<local-ip-address>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka`

## If you mess something up, simply remove the containers and try again

`docker rm kafka zookeeper`

# Docker Command for Setting Up Kafka without Zookeeper

`docker compose up`

# Running the Scripts

## Creating Topics

`node topics.js <topic-name>`

## Running the Producer

`node producer.js <message>`

## Consuming Topics

`node topics.js <group-id> <topic-name>`
