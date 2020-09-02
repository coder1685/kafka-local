import { jsonData } from "../../utils/test-data";
import { ConsumerStreamMessage } from "node-rdkafka";

jest.genMockFromModule('node-rdkafka');

export class Client {

    constructor(globalConf: any, SubClientType: any, topicConf: any) {
    }

    on(event: string, listener: (arg: ConsumerStreamMessage) => void) {
        let consumerMessage: ConsumerStreamMessage = {} as any;
        consumerMessage.value = Buffer.from(JSON.stringify(jsonData));
        return listener(consumerMessage);
    }

    connect(metadataOptions?: any, cb?: (err: any, data: any) => any): this {
        let returnValue: any = {}
        return returnValue;
    }

}

export class Producer extends Client {
    constructor(conf: any, topicConf?: any) {
        super(conf, conf, topicConf);
    }

    produce(topic: any, partition: any, message: any, key?: any, timestamp?: any, opaque?: any, headers?: any): any {
    }
}

export class KafkaConsumer extends Client {
    constructor(conf: any, topicConf: any) {
        super({}, {}, {});
    }

    consume(): void {
    }

    subscribe(topics: string[]) {
    }

}
