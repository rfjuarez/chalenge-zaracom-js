import {episodeRepositoryPort} from "../../application/use-cases";

const {findAllEpisodesAction} = require("../actions/episode-actions");
const {repositoryAdapter} = require("./repository-adapter");

const episodeRepositoryAdapter = (dispatch) => ({
    ...episodeRepositoryPort,
    findAll: async (idPodcast) => {
        repositoryAdapter(dispatch)(findAllEpisodesAction(idPodcast))
    }
});

export {
    episodeRepositoryAdapter
}