import {podcastRepositoryPort} from "../../application/use-cases";
import {flushPodcastStoreAction, selectPodcastAction} from "../actions/podcast-actions";
import {storeInstance} from "../config";

const {findAllPodcastAction} = require("../actions/podcast-actions");
const {repositoryRequestAdapter} = require("./repository-request-adapter");

const podcastRepositoryAdapter = (dispatch) => ({
    ...podcastRepositoryPort,
    findAll: async () => {
        const {podcasts} = storeInstance.getState();
        const isNotEmpty = !!podcasts && podcasts.podcasts.length > 0;
        if (isNotEmpty) {
            return podcasts.podcasts;
        }
        return repositoryRequestAdapter(dispatch)(findAllPodcastAction())
    },
    select: async (podcast) => {
        dispatch(selectPodcastAction(podcast));
    },
    getSelected: async () => {
        const {podcasts} = storeInstance.getState();
        return podcasts?.selected;
    },
    flush: async () => {
        dispatch(flushPodcastStoreAction());
    }
});

export {
    podcastRepositoryAdapter,
}