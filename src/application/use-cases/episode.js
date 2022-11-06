const useCaseEpisode = (episodeRepository) => ({
  findAll: (idPodcast) => episodeRepository.findAll(idPodcast),
})

export {useCaseEpisode};