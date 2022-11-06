import React from 'react';
import {stylesTextType, stylesTextWeightType} from '../../../assets/styles/text-styles';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Paragraph from '../Text/Paragraph/Paragraph';
import * as Styled from './EpisodeGrid.styled'

const EpisodeGrid = ({episodes, selectEpisodeHandler}) => {
  return (
    <Styled.EpisodeGrid>
      <Card>
        <Paragraph type={stylesTextType.LARGE}
          weight={stylesTextWeightType.HEAVY}>
                    Episodes: {episodes?.length}
        </Paragraph>
      </Card>
      <Styled.Table>
        <thead>
          <Styled.Row>
            <Styled.HeaderCell>Title</Styled.HeaderCell>
            <Styled.HeaderCell>Date</Styled.HeaderCell>
            <Styled.HeaderCell>Duration</Styled.HeaderCell>
          </Styled.Row>
        </thead>
        <Styled.TableBody>
          {episodes.map(episode => (
            <Styled.Row key={episode.id}
              onClick={(event) => !!selectEpisodeHandler && selectEpisodeHandler(event, episode)}>
              <Styled.DataHighlightedCell>{episode.title}</Styled.DataHighlightedCell>
              <Styled.DataCell>{episode.date}</Styled.DataCell>
              <Styled.DataCell>{episode.media.duration}</Styled.DataCell>
            </Styled.Row>
          )
          )}
        </Styled.TableBody>
      </Styled.Table>
    </Styled.EpisodeGrid>
  )
}

export default EpisodeGrid;

EpisodeGrid.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.string,
    id: PropTypes.string,
  }))
}

EpisodeGrid.defaultProps = {
  episodes: []
}