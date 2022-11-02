import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import useUseCasePodcast from "../../hooks/useUseCasePodcast";
import Podcast from "../../components/Podcast/Podcast";
import Episode from "../../components/Episode/Episode";
import './ListenEpisode.css';
import {isState} from "../../../store/reducers/reducer-state";
import Loading from "../../components/Loading/Loading";
import {useSelector} from "react-redux";
import Header from "../../components/Header/Header";
import {pathBuilder, paths} from '../../routes/paths'

const ListenEpisode = () => {
    const {podcastId, episodeId} = useParams();
    const {useCasePodcast} = useUseCasePodcast();
    const [episodeSelected, setEpisodeSelected] = useState();
    const {status: podcastStatus} = useSelector(state => state.podcasts)
    const {status: episodeStatus} = useSelector(state => state.episodes)
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const _episodeSelected = await useCasePodcast.findEpisodeOfPodcastBy(podcastId, episodeId);
            setEpisodeSelected(_episodeSelected);
        })()
    }, []);
    const navigateToPodcastDetailed = () => {
        navigate(pathBuilder(paths.PODCAST_DETAILS)(episodeSelected.podcast.id));
    }

    return (
        <Loading isLoading={() => (isState(podcastStatus).loading ||
            isState(episodeStatus).loading)}>
            <Header title='Podcaster'/>
            <div className='listen-episode'>
                <div className={'listen-episode__podcast'}>
                    <Podcast {...episodeSelected?.podcast} onClick={navigateToPodcastDetailed}/>
                </div>
                <div className={'listen-episode__episode'}>
                    <Episode {...episodeSelected?.episode}/>
                </div>
            </div>
        </Loading>

    );
}
export default ListenEpisode;