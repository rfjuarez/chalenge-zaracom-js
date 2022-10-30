import {EMPTY_PODCAST_DETAIL, PodcastDetailed} from "../domain/model";


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
}

export {useCasePodcast, UseCasePodcastStateFull};