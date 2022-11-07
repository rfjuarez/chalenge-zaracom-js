import {
  EMPTY_EPISODE,
  EMPTY_EPISODE_DETAILED,
  EMPTY_PODCAST,
  EMPTY_PODCAST_DETAIL,
  EpisodeDetailed,
  PodcastDetailed
} from '../domain/model';
import cache from '../cache/cache';

const useCasePodcast = (podcastRepository) => ({
  findAll: async () => podcastRepository.findAll(),
})

class UseCasePodcastStateFull {
  podcastRepository;
  episodesRepository;

  constructor(podcastRepository, episodesRepository) {
    this.podcastRepository = podcastRepository;
    this.episodesRepository = episodesRepository;
  }

  async findPodcastWithFilter(query) {
    const podcasts = await this.podcastRepository.findAll();
    if (!query) {
      return podcasts;
    }
    return podcasts.filter(podcast => {
      const {
        title,
        author
      } = podcast;
      const _query = query.toLowerCase();
      const queryResult = title.toLowerCase().includes(_query) ||
                author.toLowerCase().includes(_query);
      return (queryResult);
    });
  }

  async findAll(query) {

    return this.podcastRepository.findAll(query);
  }

  async findPodcastDetailed(podcastId) {
    if (!podcastId) {
      return EMPTY_PODCAST_DETAIL;
    }

    const podcast = await this.findPodcast(podcastId);
    if (!podcast) {
      return EMPTY_PODCAST_DETAIL;
    }

    const episodes = await this.episodesRepository.findAll(podcast.id);
    return new PodcastDetailed(podcast, episodes);
  }

  async findPodcast(podcastId) {
    if (!podcastId) {
      return EMPTY_PODCAST
    }

    const podcastCached = cache.get(podcastId);

    if (podcastCached) {
      return podcastCached;
    }

    const podcasts = await this.podcastRepository.findAll();
    const podcast = podcasts.find(podcast => podcast.id === podcastId);
    if (podcast) {
      cache.add(podcast?.id, podcast);
      this.podcastRepository.select(podcast);
    }

    return podcast;
  }

  async findEpisode(podcastId, episodeId) {
    if (!podcastId || !episodeId) {
      return EMPTY_EPISODE;
    }
    const episodeCached = cache.get(this.createKey(podcastId, episodeId));
    if (episodeCached) {
      return episodeCached;
    }

    const episodes = await this.episodesRepository.findAll(podcastId);
    const episode = episodes.find(episode => episode.id === episodeId);
    if(!episode){
      return EMPTY_EPISODE;
    }

    cache.add(this.createKey(podcastId, episode.id), episode);
    this.episodesRepository.select(episode);
    return episode;
  }

  createKey(podcastId, episodeId) {
    return `${podcastId}-${episodeId}`;
  }

  async findEpisodeOfPodcastBy(podcastId, episodeId) {
    if (!podcastId || !episodeId) {
      return EMPTY_EPISODE_DETAILED;
    }
    const podcast = await this.findPodcast(podcastId);
    if (!podcast) {
      return EMPTY_PODCAST_DETAIL;
    }

    const episode = await this.findEpisode(podcastId, episodeId);
    if (!episode) {
      return new EpisodeDetailed(podcast, EMPTY_EPISODE);
    }
    return new EpisodeDetailed(podcast, episode);
  }

  async selectEpisode(episode) {
    this.episodesRepository.select(episode);
  }

  async selectPodcast(episode) {
    this.podcastRepository.select(episode);
  }

  async getEpisodeSelected() {
    return this.episodesRepository.getSelected();
  }

  async getPodcastSelected() {
    return this.podcastRepository.getSelected();
  }

  async flush() {
    this.podcastRepository.flush();
    this.episodesRepository.flush();
    cache.flush();
  }
}

export {useCasePodcast, UseCasePodcastStateFull};