import {EMPTY_EPISODE, EMPTY_PODCAST} from '../domain/model';

export const podcastRepositoryPort = {
  findAll: async () => {
  },
  // eslint-disable-next-line no-unused-vars
  select: async (episode) => {},
  getSelected: async () => {
    return EMPTY_PODCAST;

  },
  flush:async ()=>{}
};

export const episodeRepositoryPort = {
  // eslint-disable-next-line no-unused-vars
  findAll: async (idPodcast) => {
  },
  // eslint-disable-next-line no-unused-vars
  select: async (episode) => {

  },
  getSelected: async () => {
    return EMPTY_EPISODE;
  },
  flush:async ()=>{}
};
