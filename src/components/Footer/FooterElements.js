import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 9.5rem;
    background: #7d3b86;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
`

export const FooterH1 = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 4px;

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
    }
`

export const FooterH2 = styled.h2`
    margin-top: 0.35rem;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 27px;

    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        max-width: 350px;
        letter-spacing: 1px;
    }
`

export const FooterCredits = styled.p`
    color: #cccccc;
    font-size: 0.75rem;
    padding: 2.5px;
`