import { jsonData } from "./utils/test-data";
import { produceMessage } from "./producer";

it('kafka publish success', () => {

    let messagePublished = produceMessage(jsonData);
    expect(messagePublished).toBe(JSON.stringify(jsonData));
});
