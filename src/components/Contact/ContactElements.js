import styled from "styled-components";
import {FaPhoneAlt, FaClock, FaLocationArrow, FaEnvelope} from 'react-icons/fa'

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 780px;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        height: 950px;
    }

`

export const ContactWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0;
    }

    @media screen and (min-width: 768px) {
        min-width: 768px;
    }

    @media screen and (min-width: 480px) {
        min-width: 480px;
    }
`

export const ContactHeading = styled.h1`
    font-size: 2.5rem;
    color: #111;
    margin-bottom: 64px;
    
    @media screen and (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 32px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 1.6rem;
    }
    
    @media screen and (max-width: 380px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 280px) {
        font-size: 1rem;
    }
    `


export const ContactColumn1 = styled.div`
    margin-bottom: 20px;
    padding: 50px;

    @media screen and (max-width: 768px) {
        padding: 30px;
        max-width: 100vw;
    }

    @media screen and (max-width: 480px) {
        padding: 10px;
    }

    @media screen and (max-width: 340px) {
        padding: 0px;
    }
`

export const ContactColumn2 = styled.div`
    position: relative;
    width: 36vw;
    height: 42vh;

    @media screen and (max-width: 768px) {
        width: 90vw;
        height: 40vh;
    }
`



export const ContactInfoItem = styled.a`
    padding: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: left;
    color: #000000;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 35px;
    margin-left: 20px;

    @media screen and (max-width: 768px) {
        margin-top: 8px;
        margin-bottom: 8px;
        margin-left: 0px;
    }
    
    @media screen and (max-width: 340px) {
        font-size: 0.8rem;
    }

    &:hover {
        transform: scale(1.05);
        color: #7d3b86;
    }
    `


export const ContactIframe = styled.iframe`
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 3px solid #222222;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.6);
`


export const Location = styled(FaLocationArrow)`
    margin-right: 20px;
    color: #7d3b86;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 340px) {
        font-size: 1.2rem;
        margin-right: 10px;
    }
    `
export const Phone = styled(FaPhoneAlt)`
    margin-right: 20px;
    color: #7d3b86;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 340px) {
        font-size: 1.2rem;
        margin-right: 10px;
    }
    `
export const Mail = styled(FaEnvelope)`
    margin-right: 20px;
    color: #7d3b86;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 340px) {
        font-size: 1.2rem;
        margin-right: 10px;
    }
    `
export const Clock = styled(FaClock)`
    margin-right: 20px;
    color: #7d3b86;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 340px) {
        font-size: 1.2rem;
        margin-right: 10px;
    }
`