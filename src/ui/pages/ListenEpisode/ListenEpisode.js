import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useParams} from "react-router";
import useUseCasePodcast from "../../hooks/useUseCasePodcast";
import Podcast from "../../components/Podcast/Podcast";
import Episode from "../../components/Episode/Episode";
import './ListenEpisode.css';

const ListenEpisode = () => {
    const location = useLocation();
    const {
        state
    } = location || {state: undefined};
    const {podcastId, episodeId} = useParams();
    const {useCasePodcast} = useUseCasePodcast();
    const [episodeSelected, setEpisodeSelected] = useState();
    useEffect(() => {
        if (!state?.podcast || !state?.episode) {
            (async () => {
                const _episodeSelected = await useCasePodcast.findEpisodeOfPodcastBy(podcastId, episodeId);
                setEpisodeSelected(_episodeSelected);
            })()
        }
        if (!!state?.podcast && !!state?.episode) {
            const _episodeSelected = {podcast: state.podcast, episode: state.episode}
            setEpisodeSelected(_episodeSelected);
        }
    }, []);

    if (!episodeSelected?.podcast || !episodeSelected?.episode) {
        console.log('loading')
        return;
    }
    return (
        <div className='listen-episode'>
            <div className={'listen-episode__podcast'}>
                <Podcast {...episodeSelected.podcast}/>
            </div>
            <div className={'listen-episode__episode'}>
                <Episode {...episodeSelected.episode}/>
            </div>
        </div>

    );
}
export default ListenEpisode;