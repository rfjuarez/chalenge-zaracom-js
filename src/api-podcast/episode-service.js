import {findById as findItemDetailedById} from './item-detailed-service'
import {secureGet} from "./transport";
import {xmlRequestHandler} from "./request-handler";

const findAll = async (idPodcast) => {
    const itemDetailedResponse = await findItemDetailedById(idPodcast);
    const {feedUrl} = itemDetailedResponse;
    return secureGet(feedUrl)(xmlRequestHandler);
}

export {
    findAll
}