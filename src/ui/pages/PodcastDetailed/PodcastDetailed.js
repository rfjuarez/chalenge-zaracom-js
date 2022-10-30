import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import useUseCasePodcast from "../../hooks/useUseCasePodcast";
import EpisodeGrid from "../../components/EpisodeGrid/EpisodeGrid";
import Podcast from "../../components/Podcast/Podcast";
import {EMPTY_PODCAST_DETAIL} from "../../../application/domain/model";
import './PodcastDetailed.css';

const PodcastDetailed = ({}) => {
        const {podcastId} = useParams();
        const [podcastDetail, setPodcastDetail] = useState(EMPTY_PODCAST_DETAIL);
        const {useCasePodcast} = useUseCasePodcast();
        useEffect(() => {
                (async () => {
                    if (podcastId) {
                        const podcastDetailed = await useCasePodcast.findPodcastDetailed(podcastId);
                        setPodcastDetail(podcastDetailed);
                    }
                })();
            }, []
        )
        return (
            <div className='podcast-detailed'>
                <div className='podcast-detailed__podcast'>
                    <Podcast author={podcastDetail.podcast?.author}
                             img={podcastDetail.podcast?.poster}
                             title={podcastDetail.podcast?.title}
                             description={podcastDetail.podcast?.description}
                             id={podcastDetail.podcast?.id}/>

                </div>
                <div className='podcast-detailed__episode-grid'>
                    <EpisodeGrid episodes={podcastDetail.episodes}/>
                </div>
            </div>
        )
    }
;

export default PodcastDetailed;