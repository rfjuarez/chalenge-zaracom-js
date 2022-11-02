import Stripe from "../Stripe/Stripe";
import React from "react";
import './Stripe.css';

const Stripes = ({posters, selectPosterHandler, stripeSize}) => {
    const stripes = slicePostersByStripe(posters, stripeSize);
    return (<div className={'stripes-wrapper'}>
        {stripes.map((postersByStripe, key) => <Stripe key={key} posters={postersByStripe}
                                                       selectPosterHandler={selectPosterHandler}/>)}
    </div>)
}

export default Stripes;

const slicePostersByStripe = (origin, stripeSize) => {
    const stripes = [];
    let from = 0;
    let progress = stripeSize;
    for (; from < origin.length; from += progress) {
        const to = from + progress;
        const slice = origin.slice(from, to);
        stripes.push(slice);
    }
    stripes.push(origin.slice(from, origin.length - 1));
    return stripes;
}