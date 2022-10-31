import {EMPTY_EPISODE, EMPTY_PODCAST} from "../domain/model";

export const podcastRepositoryPort = {
    findAll: async () => {
    },
    select: async (episode) => {

    },
    getSelected: async () => {
        return EMPTY_PODCAST;

    },
    flush:async ()=>{}
};

export const episodeRepositoryPort = {
    findAll: async (idPodcast) => {
    },
    select: async (episode) => {

    },
    getSelected: async () => {
        return EMPTY_EPISODE;
    },
    flush:async ()=>{}
};
