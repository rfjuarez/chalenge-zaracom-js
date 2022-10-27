import {podcastRepositoryPort} from "../../application/use-cases";

const {findAllPodcastAction} = require("../actions/podcast-actions");
const {repositoryAdapter} = require("./repository-adapter");

const podcastRepositoryAdapter = (dispatch) => ({
    ...podcastRepositoryPort,
    findAll: async () =>
        repositoryAdapter(dispatch)(findAllPodcastAction())
});

export {
    podcastRepositoryAdapter,
}