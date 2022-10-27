const useCasePodcast = (podcastRepository) => ({
    findAll: async () => podcastRepository.findAll(),
})
export {useCasePodcast};