import {jsonData} from "./utils/test-data";
import {consumeMessage} from "./consumer";

it('kafka consume success', () => {

    let messageConsumed = consumeMessage();
    expect(messageConsumed).toBe(JSON.stringify(jsonData));
});
