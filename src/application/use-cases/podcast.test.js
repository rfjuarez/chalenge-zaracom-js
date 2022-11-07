import {UseCasePodcastStateFull} from './podcast';
import {mockEpisodeRepository, mockPodcastRepository, mockPodcasts} from './podcast.mocks';
import {S_D} from '../domain/model';

describe('UseCasePodcast', () => {
  const useCasaPodcast = new UseCasePodcastStateFull(mockPodcastRepository, mockEpisodeRepository);
  it('Traer todos los podcast', async () => {
    const podcasts = await useCasaPodcast.findAll();
    expect(podcasts).toHaveLength(mockPodcasts.length);
  });
  it('Filtrar por author', async () => {
    const podcasts = await useCasaPodcast.findPodcastWithFilter('Gandalf');
    expect(podcasts).toHaveLength(2);
  });
  it('Filtrar por descripción', async () => {
    const podcasts = await useCasaPodcast.findPodcastWithFilter('Weasley');
    expect(podcasts).toHaveLength(1);
  });
  it('Filtrar para una entrada vacia', async () => {
    const podcasts = await useCasaPodcast.findPodcastWithFilter('');
    expect(podcasts).toHaveLength(3);
  });
  it('Filtrar para una entrada nula', async () => {
    const podcasts = await useCasaPodcast.findPodcastWithFilter(null);
    expect(podcasts).toHaveLength(3);
  });
  it('Buscar podcast detallado', async () => {
    const podcastsDetailed = await useCasaPodcast.findPodcastDetailed(2);
    const {podcast, episodes} = podcastsDetailed;
    expect(podcast.author).toBe('Gandalf');
    expect(podcast.title).toBe('You shall not pass');
    expect(episodes).toHaveLength(3);
  });
  it('Buscar podcast detallado con id null', async () => {
    const podcastsDetailed = await useCasaPodcast.findPodcastDetailed(null);
    const {podcast, episodes} = podcastsDetailed;
    expect(podcast.author).toBe(S_D);
    expect(podcast.title).toBe(S_D);
    expect(episodes).toHaveLength(0);
  });
  it('Buscar podcast detallado con id no existente', async () => {
    const podcastsDetailed = await useCasaPodcast.findPodcastDetailed(null);
    const {podcast, episodes} = podcastsDetailed;
    expect(podcast.author).toBe(S_D);
    expect(podcast.title).toBe(S_D);
    expect(episodes).toHaveLength(0);
  });

  it('Buscar episodio', async () => {
    const episode = await useCasaPodcast.findEpisode(1,2);
    expect(episode.title).toBe('Episodio-2')
  });
  it('Buscar episodio para id no existentes', async () => {
    const episode = await useCasaPodcast.findEpisode(1,5);
    expect(episode.title).toBe(S_D)
  });
  it('Buscar episodio para id null', async () => {
    const episode = await useCasaPodcast.findEpisode(1,null);
    expect(episode.title).toBe(S_D)
  });
});