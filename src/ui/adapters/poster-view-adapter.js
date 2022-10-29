import React from 'react';
import Poster from "../components/Poster/Poster";

export const posterViewAdapter = (podcast) => {
    return <Poster
        title={podcast.title}
        img={podcast.poster}
        author={podcast.author}
        id={podcast.id}
        key={podcast.id}
    />
}