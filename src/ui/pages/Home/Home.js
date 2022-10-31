import React, {useEffect, useState} from 'react';
import useUseCasePodcast from "../../hooks/useUseCasePodcast";
import {posterViewAdapter} from "../../adapters/poster-view-adapter";
import Stripe from "../../components/Stripe/Stripe";
import PropTypes from "prop-types";
import {pathBuilder, paths} from "../../routes/paths";
import {useNavigate} from "react-router";
import Loading from "../../components/Loading/Loading";
import {isState} from "../../../store/reducers/reducer-state";
import {useSelector} from "react-redux";

const slicePostersByStripe = (origin, stripeSize) => {
    const stripes = [];
    for (let from = 0; from + stripeSize < origin.length; from += stripeSize) {
        const to = from + stripeSize - 1;
        const slice = origin.slice(from, to);
        stripes.push(slice);
    }
    return stripes;
}

const Home = ({stripeSize}) => {
    const {useCasePodcast} = useUseCasePodcast();
    const [stripes, setStripes] = useState([]);
    const {status: podcastStatus} = useSelector(state => state.podcasts)
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
                const podcasts = await useCasePodcast.findAll();
                const posters = podcasts.map(podcast => posterViewAdapter({...podcast}));
                const postersByStripe = slicePostersByStripe(posters, stripeSize);
                setStripes(postersByStripe);
            }
        )();
    }, []);

    const selectPosterHandler = async (event, podcast) => {
        event.preventDefault();
        await useCasePodcast.selectPodcast(podcast);
        navigate(pathBuilder(paths.PODCAST_DETAILS)(podcast.id));
    }

    return (
        <Loading isLoading={()=>isState(podcastStatus).loading}>
            {stripes.map((postersByStripe, key) => <Stripe key={key} posters={postersByStripe} selectPosterHandler={selectPosterHandler}/>)}
        </Loading>

    )
}
Home.propTypes = {
    stripeSize: PropTypes.number,
}

Home.defaultProps = {
    stripeSize: 5,
}
export default Home;