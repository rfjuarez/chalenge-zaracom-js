import {findById as findItemDetailedById} from './item-detailed-service'
import {secureGet} from "./transport";
import {xmlRequestHandler} from "./request-handler";

const findAll = async (idPodcast) => {
    const itemDetailedResponse = await findItemDetailedById(idPodcast);
    const {results} = itemDetailedResponse;
    return secureGet(results[0].feedUrl)(xmlRequestHandler);
}

export {
    findAll
}