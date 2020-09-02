import * as Kafka from 'node-rdkafka';
import { KAFKA_HOST, KAFKA_TOPIC } from "./utils/config";

export function produceMessage(jsonData: any) : string {

    let messageProduced: string = '';

    let producer = new Kafka.Producer({
        'metadata.broker.list': KAFKA_HOST,
        'dr_cb': true
    });

    producer.connect();

    producer.on('event.log', function(log) {
        console.log(log);
    });

    producer.on('event.error', function(err) {
        console.error(err);
    });

    producer.on('ready', function(arg) {
        console.log('producer ready.' + JSON.stringify(arg));
        messageProduced = JSON.stringify(jsonData);
        producer.produce(KAFKA_TOPIC, 0, Buffer.from(JSON.stringify(jsonData)), 1, Date.now(), "", {});
    });

    return messageProduced;
}

//produceMessage(jsonData)
