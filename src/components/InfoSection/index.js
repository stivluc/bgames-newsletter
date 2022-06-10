import React, {useState} from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer, BtnWrap, Column1, ArrowDownward, ArrowDown, Column2, Heading, Img, ImgWrap, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'



const InfoSection = ({tolink, lightBg, id, imgStart, topLine, lightText, headline, darkText, description, description2, description3, description4, description5, buttonLabel, img, alt, primary, dark, dark2}) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine lightText={lightText}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <Subtitle style={{fontWeight:'600'}} darkText={darkText}>{description2}</Subtitle>
                            <Subtitle style={{fontWeight:'600'}} darkText={darkText}>{description3}</Subtitle>
                            <Subtitle style={{fontWeight:'600'}} darkText={darkText}>{description4}</Subtitle>
                            <Subtitle style={{fontWeight:'600'}} darkText={darkText}>{description5}</Subtitle>
                            <BtnWrap>
                                <Button to={tolink} onMouseEnter={onHover} onMouseLeave={onHover} style={{fontWeight:'700'}}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0} 
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >{buttonLabel} {hover ? <ArrowDownward /> : <ArrowDown />}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
    )
}

export default InfoSection
