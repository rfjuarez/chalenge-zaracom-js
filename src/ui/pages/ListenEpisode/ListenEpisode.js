import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import useUseCasePodcast from "../../hooks/useUseCasePodcast";
import Podcast from "../../components/Podcast/Podcast";
import Episode from "../../components/Episode/Episode";
import './ListenEpisode.css';
import {isState} from "../../../store/reducers/reducer-state";
import Loading from "../../components/Loading/Loading";
import {useSelector} from "react-redux";

const ListenEpisode = () => {
    const {podcastId, episodeId} = useParams();
    const {useCasePodcast} = useUseCasePodcast();
    const [episodeSelected, setEpisodeSelected] = useState();
    const {status: podcastStatus} = useSelector(state => state.podcasts)
    const {status: episodeStatus} = useSelector(state => state.episodes)

    useEffect(() => {
        (async () => {
            const _episodeSelected = await useCasePodcast.findEpisodeOfPodcastBy(podcastId, episodeId);
            setEpisodeSelected(_episodeSelected);
        })()
    }, []);

    return (
        <Loading isLoading={() => (isState(podcastStatus).loading ||
            isState(episodeStatus).loading)}>
            <div className='listen-episode'>
                <div className={'listen-episode__podcast'}>
                    <Podcast {...episodeSelected?.podcast}/>
                </div>
                <div className={'listen-episode__episode'}>
                    <Episode {...episodeSelected?.episode}/>
                </div>
            </div>
        </Loading>

    );
}
export default ListenEpisode;