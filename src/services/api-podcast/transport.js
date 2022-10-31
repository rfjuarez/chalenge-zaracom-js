const httpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}


const secureGet = (url, queryParams) => {
    const searchParams = new URLSearchParams(queryParams);
    const urlWithQueryParams = searchParams ? `${url}?${searchParams.toString()}` : url;
    return (requestHandler) => requestHandler(() => fetch(urlWithQueryParams, {
        method: httpMethod.GET,
    }));
}

export {
    secureGet,
}