import React, {useEffect} from 'react';
import useUseCasePodcast from "../../hooks/useUseCasePodcast";

const Home = () => {
    //concept test.
    const {useCasePodcast} = useUseCasePodcast();
    useEffect(() => {
        (async () => {
                const podcast = await useCasePodcast.findAll();
                console.log(podcast);
            }

        )();
    }, [useCasePodcast])
    return (<div>Home de podcast</div>)
}
export default Home;