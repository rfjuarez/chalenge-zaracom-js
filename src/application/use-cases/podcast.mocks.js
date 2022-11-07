import {episodeRepositoryPort, podcastRepositoryPort} from './port';
const mockEpisodes=[{
  id:1,
  title:'Episodio-1',
  date: '',
  duration: '',
  media: '',
  description: '',
},
{
  id:2,
  title:'Episodio-2',
  date: '',
  duration: '',
  media: '',
  description: '',
},
{
  id:3,
  title:'Episodio-3',
  date: '',
  duration: '',
  media: '',
  description: '',
}
];

const mockPodcasts=[{
  id: 1,
  author: 'Gandalf',
  title: 'La Comarca y los hobbits',
  description: 'Habitos de los hobbits'
},
{
  id: 2,
  author: 'Gandalf',
  title: 'You shall not pass',
  description: 'La experiencia de luchar con un Balrog'
},
{
  id: 3,
  author: 'Harry Potter',
  title: 'Los Weasley',
  description: 'Mi vida junto a Ginny Weasley'
},
];
const mockPodcastRepository = {
  ...podcastRepositoryPort,
  findAll: async () => {
    return Promise.resolve(mockPodcasts);
  },
};

const mockEpisodeRepository = {
  ...episodeRepositoryPort,
  // eslint-disable-next-line no-unused-vars
  findAll: async (idPodcast) => {
    return Promise.resolve(mockEpisodes);
  },
};

export {
  mockPodcastRepository,
  mockEpisodeRepository,
  mockPodcasts,
  mockEpisodes,
}