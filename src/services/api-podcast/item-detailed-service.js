import {secureGet} from "./transport";
import {BASE_PATH} from "./constants";
import {jsonRequestHandler} from "./request-handler";

const findById = (idPodcast) => {
    const path = `${BASE_PATH}/lookup`
    return secureGet(path, {id: idPodcast})(jsonRequestHandler);
}

export {
    findById,
}