import { KafkaConsumer } from "node-rdkafka";
import {KAFKA_HOST, KAFKA_TOPIC} from "./utils/config";

export function consumeMessage(): string {

    let messageCosumed: string = '';

    let consumer = new KafkaConsumer({
        'metadata.broker.list': KAFKA_HOST,
        'group.id': 'node-rdkafka-consumer-flow-example',
        'enable.auto.commit': false
    }, {});

    //logging debug messages, if debug is enabled
    consumer.on('event.log', function(log) {
        console.log(log);
    });

    //logging all errors
    consumer.on('event.error', function(err) {
        console.error('Error from consumer');
        console.error(err);
    });

    //counter to commit offsets every numMessages are received
    var counter = 0;
    var numMessages = 5;

    consumer.on('ready', function(arg) {
        console.log('consumer ready.' + JSON.stringify(arg));

        consumer.subscribe([KAFKA_TOPIC]);
        //start consuming messages
        consumer.consume();
    });


    consumer.on('data', function(m) {
        counter++;
        console.log('Inside on Consumer data');

        //committing offsets every numMessages
        if (counter % numMessages === 0) {
            console.log('calling commit');
            consumer.commit(m);
        }

        console.log(m.value.toString());
        messageCosumed = m.value.toString();

    });

    consumer.on('disconnected', function(arg) {
        console.log('consumer disconnected. ' + JSON.stringify(arg));
    });

    //starting the consumer
    consumer.connect();

    //stopping this example after 30s
    setTimeout(function() {
        consumer.disconnect();
    }, 30000);

    return messageCosumed;
}

consumeMessage();
