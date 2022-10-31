const serviceAdapter = (translator) =>
    async (service) => {
        const response = await service();
        return translator(response);
    }

export {
    serviceAdapter
}