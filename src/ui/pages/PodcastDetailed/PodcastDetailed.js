import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import useUseCasePodcast from "../../hooks/useUseCasePodcast";
import EpisodeGrid from "../../components/EpisodeGrid/EpisodeGrid";
import Podcast from "../../components/Podcast/Podcast";
import {EMPTY_PODCAST_DETAIL} from "../../../application/domain/model";
import './PodcastDetailed.css';
import {pathBuilder, paths} from "../../routes/paths";

const PodcastDetailed = ({}) => {
        const {podcastId} = useParams();
        const [podcastDetail, setPodcastDetail] = useState(EMPTY_PODCAST_DETAIL);
        const {useCasePodcast} = useUseCasePodcast();
        const navigate = useNavigate();

        useEffect(() => {
                (async () => {
                    if (podcastId) {
                        const podcastDetailed = await useCasePodcast.findPodcastDetailed(podcastId);
                        setPodcastDetail(podcastDetailed);
                    }
                })();
            }, []
        )
        const onClickHandler = (event, episode) => {
            const {
                podcast,
            } = podcastDetail;

            event.preventDefault();
            const path = pathBuilder(paths.EPISODE)(podcast.id, episode.id);
            navigate(path, {state: {podcast, episode,}});
        }

        return (
            <div className='podcast-detailed'>
                <div className='podcast-detailed__podcast'>
                    <Podcast author={podcastDetail.podcast?.author}
                             poster={podcastDetail.podcast?.poster}
                             title={podcastDetail.podcast?.title}
                             description={podcastDetail.podcast?.description}
                             id={podcastDetail.podcast?.id}/>

                </div>
                <div className='podcast-detailed__episode-grid'>
                    <EpisodeGrid episodes={podcastDetail.episodes} onClickHandler={onClickHandler}/>
                </div>
            </div>
        )
    }
;

export default PodcastDetailed;