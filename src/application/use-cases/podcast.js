import {
    EMPTY_EPISODE,
    EMPTY_EPISODE_DETAILED,
    EMPTY_PODCAST_DETAIL,
    EpisodeDetailed,
    PodcastDetailed
} from "../domain/model";


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
            return (title.toLowerCase().includes(_query) ||
                author.toLowerCase().includes(_query));
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

        this.podcastRepository.select(podcast);
        const episodes = await this.episodesRepository.findAll(podcast.id);
        return new PodcastDetailed(podcast, episodes);
    }

    async findPodcast(podcastId) {
        const podcastSelected = await this.podcastRepository.getSelected();
        if (!!podcastSelected && podcastSelected.id === podcastId)
            return podcastSelected;
        const podcasts = await this.podcastRepository.findAll();
        return podcasts.find(podcast => podcast.id === podcastId);
    }

    async findEpisode(podcastId, episodeId) {
        const episodeSelected = await this.episodesRepository.getSelected();
        if (!!episodeSelected && episodeSelected.id === episodeId)
            return episodeSelected;
        const episodes = await this.episodesRepository.findAll(podcastId);
        return episodes.find(episode => episode.id === episodeId);
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
    }
}

export {useCasePodcast, UseCasePodcastStateFull};