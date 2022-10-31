import React from 'react';
import Card from "../Card/Card";
import Paragraph from "../Text/Paragraph/Paragraph";
import {stylesTextThemeColorType, stylesTextType, stylesTextWeightType} from "../../../assets/styles/text-styles";
import * as Styled from './Episode.styled'


const Episode = ({title, description, media}) => {
    return (
        <Card>
            <Paragraph weight={stylesTextWeightType.HEAVY}
                       type={stylesTextType.LARGE}
                       themeColor={stylesTextThemeColorType.STRONG}>
                {title}
            </Paragraph>
            <Paragraph>
                <div dangerouslySetInnerHTML={{__html: description}}/>
            </Paragraph>
            <Styled.Audio controls>
                <source src={media?.source} type={media?.type}/>
            </Styled.Audio>
        </Card>)
}

export default Episode;