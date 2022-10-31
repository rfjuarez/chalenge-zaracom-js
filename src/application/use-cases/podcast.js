import {
    EMPTY_EPISODE,
    EMPTY_EPISODE_DETAILED,
    EMPTY_PODCAST_DETAIL,
    EpisodeDetailed,
    PodcastDetailed,
    S_D
} from "../domain/model";


const useCasePodcast = (podcastRepository) => ({
    findAll: async () => podcastRepository.findAll(),
})


class UseCasePodcastStateFull {
    _podcasts = [];
    podcastRepository;
    episodesRepository;

    constructor(podcastRepository, episodesRepository) {
        this.podcastRepository = podcastRepository;
        this.episodesRepository = episodesRepository;
    }

    async findAll() {
        if (!!this._podcasts && this._podcasts?.length === 0) {
            this._podcasts = await this.podcastRepository.findAll();
        }
        return this._podcasts;
    }

    async findPodcastDetailed(podcastId) {
        if (!podcastId) {
            return EMPTY_PODCAST_DETAIL;
        }
        const podcasts = await this.findAll();

        if (!podcasts) {
            return EMPTY_PODCAST_DETAIL;
        }
        const podcast = podcasts.find(podcast => podcastId === podcast.id)
        if (!podcast) {
            return EMPTY_PODCAST_DETAIL;
        }
        const episodes = await this.episodesRepository.findAll(podcast.id);
        return new PodcastDetailed(podcast, episodes);
    }

    async findEpisodeOfPodcastBy(podcastId, episodeId) {
        if (!podcastId || !episodeId) {
            return EMPTY_EPISODE_DETAILED;
        }
        const podcastDetailed = await this.findPodcastDetailed(podcastId);
        if (podcastDetailed.podcast.id === S_D) {
            return EMPTY_EPISODE_DETAILED;
        }
        if (podcastDetailed.episodes.length === 0) {
            return EMPTY_EPISODE_DETAILED;
        }
        const episode = podcastDetailed.episodes.find(episode => episode.id === episodeId);
        if (!episode) {
            return new EpisodeDetailed({...podcastDetailed.podcast}, EMPTY_EPISODE);
        }
        return new EpisodeDetailed({...podcastDetailed.podcast}, episode);
    }
}

export {useCasePodcast, UseCasePodcastStateFull};