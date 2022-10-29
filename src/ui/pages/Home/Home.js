import React, {useEffect, useState} from 'react';
import useUseCasePodcast from "../../hooks/useUseCasePodcast";
import {posterViewAdapter} from "../../adapters/poster-view-adapter";
import Stripe from "../../components/Stripe/Stripe";
import PropTypes from "prop-types";

const slicePostersByStripe = (origin, stripeSize)=>{
    const stripes= [];
    for(let from = 0; from+stripeSize<origin.length; from+=stripeSize){
        const to=from+stripeSize-1;
        const slice = origin.slice(from, to);
        stripes.push(slice);
    }
    return stripes;
}

const Home = ({stripeSize}) => {
    const {useCasePodcast} = useUseCasePodcast();
    const [stripes, setStripes] = useState([]);

    useEffect(() => {
        (async () => {
                const podcasts = await useCasePodcast.findAll();
                const posters = podcasts.map(podcast => posterViewAdapter({...podcast}));
                const postersByStripe = slicePostersByStripe(posters,stripeSize);
                setStripes(postersByStripe);
            }
        )();
    }, [])


    return (
        <>
            {stripes.map(postersByStripe => <Stripe posters={postersByStripe}/>)}
        </>

    )
}
Home.propTypes = {
    stripeSize: PropTypes.number,
}

Home.defaultProps = {
    stripeSize: 5,
}
export default Home;