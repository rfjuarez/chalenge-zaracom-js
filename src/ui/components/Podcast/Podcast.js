import React from 'react';
import Card from "../Card/Card";
import Image from "../Image/Image";
import Paragraph from "../Text/Paragraph/Paragraph";
import {stylesTextType, stylesTextWeightType} from "../../../assets/styles/text-styles";
import './Podcast.css';

const Podcast = ({title, author, img, id, description}) => {
    return (
        <div className='podcast'>
            <Card width={180} height={260}>
                <Image height={108} width={108} src={img} alt={title}/>
                <Paragraph
                    weight={stylesTextWeightType.HEAVY}> {title}
                </Paragraph>
                <Paragraph
                    weight={stylesTextWeightType.LIGHT}
                    type={stylesTextType.SMALL}
                > {author}
                </Paragraph>
                <Paragraph
                    weight={stylesTextWeightType.HEAVY}> Description
                </Paragraph>
                <Paragraph
                    weight={stylesTextWeightType.LIGHT}
                    type={stylesTextType.SMALL}
                > {description}
                </Paragraph>
            </Card>
        </div>
    )
}

export default Podcast;