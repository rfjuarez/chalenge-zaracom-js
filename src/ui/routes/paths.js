export const paths = {
  HOME: '/',
  PODCAST_DETAILS: '/podcast/:podcastId',
  EPISODE: '/podcast/:podcastId/episode/:episodeId',
}
const pathBuilderMapper = new Map();
pathBuilderMapper.set(paths.HOME, () => (paths.HOME));
pathBuilderMapper.set(paths.PODCAST_DETAILS, (podcastId) => (paths.PODCAST_DETAILS.replace(':podcastId', podcastId)));
pathBuilderMapper.set(paths.EPISODE, (podcastId, episodeId) => (paths.EPISODE
  .replace(':podcastId', podcastId)
  .replace(':episodeId', episodeId)));

export const pathBuilder = (strategy) => pathBuilderMapper.get(strategy);
