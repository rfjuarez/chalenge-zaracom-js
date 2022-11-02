import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import useUseCasePodcast from "../../hooks/useUseCasePodcast";
import EpisodeGrid from "../../components/EpisodeGrid/EpisodeGrid";
import Podcast from "../../components/Podcast/Podcast";
import {EMPTY_PODCAST_DETAIL} from "../../../application/domain/model";
import './PodcastDetailed.css';
import {pathBuilder, paths} from "../../routes/paths";
import Loading from "../../components/Loading/Loading";
import {useSelector} from "react-redux";
import {isState} from "../../../store/reducers/reducer-state";
import Header from "../../components/Header/Header";

const PodcastDetailed = ({}) => {
        const {podcastId} = useParams();
        const [podcastDetail, setPodcastDetail] = useState(EMPTY_PODCAST_DETAIL);
        const {useCasePodcast} = useUseCasePodcast();
        const {status: podcastStatus} = useSelector(state => state.podcasts)
        const {status: episodeStatus} = useSelector(state => state.episodes)
        const navigate = useNavigate();

        useEffect(() => {
                (async () => {
                    const podcastDetailed = await useCasePodcast.findPodcastDetailed(podcastId);
                    setPodcastDetail(podcastDetailed);
                })();
            }, []
        )
        const selectEpisodeHandler = async (event, episode) => {
            const {
                podcast,
            } = podcastDetail
            event.preventDefault();
            await useCasePodcast.selectEpisode(episode);
            navigate(pathBuilder(paths.EPISODE)(podcast.id, episode.id));
        }

        return (
            <Loading isLoading={() => (isState(podcastStatus).loading ||
                isState(episodeStatus).loading)}>
                <Header title='Podcaster'/>
                <div className='podcast-detailed'>
                    <div className='podcast-detailed__podcast'>
                        <Podcast author={podcastDetail.podcast?.author}
                                 poster={podcastDetail.podcast?.poster}
                                 title={podcastDetail.podcast?.title}
                                 description={podcastDetail.podcast?.description}
                                 id={podcastDetail.podcast?.id}/>

                    </div>
                    <div className='podcast-detailed__episode-grid'>
                        <EpisodeGrid episodes={podcastDetail?.episodes} selectEpisodeHandler={selectEpisodeHandler}/>
                    </div>
                </div>
            </Loading>
        )
    }
;

export default PodcastDetailed;