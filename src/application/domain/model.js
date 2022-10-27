export class Media {
    source;
    type;
    duration;

    constructor(source, type, duration) {
        this.source = source;
        this.type = type;
        this.duration = duration;
    }
}

export class Episode {
    id;
    podcastId;
    title;
    date;
    duration;
    media;
    description;

    constructor(id, podcastId, title, date, description, media) {
        this.id = id;
        this.podcastId = podcastId;
        this.title = title;
        this.date = date;
        this.description = description;
        this.media = media;
    }
}

export class Podcast {
    id;
    author;
    title;
    poster;
    description;


    constructor(id, author, title, poster, description) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.poster = poster;
        this.description = description;
    }
}
