import React, {useEffect, useState} from 'react';
import useUseCasePodcast from '../../hooks/useUseCasePodcast';
import {posterViewAdapter} from '../../adapters/poster-view-adapter';
import PropTypes from 'prop-types';
import {pathBuilder, paths} from '../../routes/paths';
import {useNavigate} from 'react-router';
import Loading from '../../components/Loading/Loading';
import {isState} from '../../../store/reducers/reducer-state';
import {useSelector} from 'react-redux';
import InputFilter from '../../components/InputFilter/InputFilter';
import Header from '../../components/Header/Header';
import './Home.css';
import Pill from '../../components/Pill/Pill';
import Stripes from '../../components/Stripes/Stripes';


const Home = ({stripeSize}) => {
  const {useCasePodcast} = useUseCasePodcast();

  const [posters, setPosters] = useState([]);
  const {status: podcastStatus} = useSelector(state => state.podcasts)
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  useEffect(() => {
    (async () => {
      const podcasts = await useCasePodcast.findPodcastWithFilter(query);
      const posters = podcasts.map(podcast => posterViewAdapter({...podcast}));
      setPosters(posters);

    }
    )();
  }, [query]);

  const selectPosterHandler = async (event, podcast) => {
    event.preventDefault();
    await useCasePodcast.selectPodcast(podcast);
    navigate(pathBuilder(paths.PODCAST_DETAILS)(podcast.id));
  }
  const queryHandler = (query) => {
    setQuery(query);
  }

  return (
    <Loading isLoading={() => isState(podcastStatus).loading}>
      <Header title='Podcaster'>
        <div className='header__input-filter-wrapper'>
          <div className='header__input-filter'>
            <div className='input-filter__pill-wrapper'>
              <Pill value={posters.length}/>
            </div>
            <InputFilter queryHandler={queryHandler} placeHolder={'Filter podcast...'}/>
          </div>
        </div>
      </Header>
      <Stripes selectPosterHandler={selectPosterHandler} posters={posters} stripeSize={stripeSize}/>
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

