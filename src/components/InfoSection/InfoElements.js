import styled from "styled-components";
import {MdKeyboardArrowDown, MdArrowDownward} from 'react-icons/md'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => 
    (lightBg ? '#eee' : '#fafafa')};

    @media screen and (max-width: 768px) {
        padding: 5rem 0 6.25rem;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    height: 800px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0 1.5rem;
    justify-content: center;

    @media screen and (max-width: 890px){
        height: 850px;
    }

    @media screen and (max-width: 400px){
        height: 900px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${ ({ imgStart }) => 
    imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => 
            // imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
            imgStart ? `'col2' 'col1'` : `'col2' 'col1'`};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 20px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 20px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.div`
    color: ${({lightText}) => 
    lightText ? '#f3a41f' : '#7d3b86'};
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    margin-top: 2rem;
`

export const Heading = styled.h1`
    margin-bottom: 1.5rem;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => 
    lightText ? '#000' : '#010606'};

    @media screen and (max-width: 890px) {
        font-size: 2.8rem;
        line-height: 1;
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 360px){
        font-size: 1.6rem;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.3rem;
    line-height: 1.3;
    color: ${({darkText}) => 
    darkText ? '#010606' : '#000'};

@media screen and (max-width: 770px) {
        max-width: 600px;
    }

@media screen and (max-width: 420px){
        font-size: 1.1rem;
    }

    @media screen and (max-width: 360px){
        font-size: 1.0rem;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    max-height: 500px;
    object-fit: contain;

    @media screen and (max-width: 770px) {
        max-height: 300px;
    }
`

export const ArrowDownward = styled(MdArrowDownward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowDown = styled(MdKeyboardArrowDown)`
    margin-left: 8px;
    font-size: 20px;
`