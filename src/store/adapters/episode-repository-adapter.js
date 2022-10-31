import {episodeRepositoryPort} from "../../application/use-cases";
import {repositoryActionAdapter} from "./repository-action-adapter";
import {storeInstance} from "../config";
import {flushEpisodeStoreAction, selectEpisodeAction} from "../actions/episode-actions";

const {findAllEpisodesAction} = require("../actions/episode-actions");
const {repositoryRequestAdapter} = require("./repository-request-adapter");

const episodeRepositoryAdapter = (dispatch) => ({
    ...episodeRepositoryPort,
    findAll: async (idPodcast) => {
        return repositoryRequestAdapter(dispatch)(findAllEpisodesAction(idPodcast))
    },
    select: async (episode) => {
        repositoryActionAdapter(selectEpisodeAction(episode));
    },
    getSelected: async () => {
        const {episodes} = storeInstance.getState();
        return episodes?.selected;
    },
    flush: async () => {
        repositoryActionAdapter(flushEpisodeStoreAction());
    }


});

export {
    episodeRepositoryAdapter
}