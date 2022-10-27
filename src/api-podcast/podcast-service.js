import {secureGet} from "./transport";
import {BASE_PATH} from "./constants";
import {jsonRequestHandler} from "./request-handler";

const findAll = async () => {
    const path = `${BASE_PATH}/us/rss/toppodcasts/limit=100/genre=1310/json`
    return secureGet(path)(jsonRequestHandler);
}

export {
    findAll,
}
