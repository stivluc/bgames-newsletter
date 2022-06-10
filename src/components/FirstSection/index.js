import React, {useState, useEffect} from 'react'
import Image from '../../images/BoardGames.jpg'
import { HeroContainer, HeroBg, ArrowDownward, ArrowDown, HeroBtnWrapper, HeroContent, HeroH1, HeroP, ImageBg, HeroTitle } from './FirstElements'
import {Button} from '../ButtonElement'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from '../CustomForm/CustomForm'


function getWindowDimensions() {
const { innerWidth: width } = window;
return {
    width,
};
}

function useWindowDimensions() {
const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

useEffect(() => {
    function handleResize() {
    setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

return windowDimensions;
}

const FirstSection = () => {
    const [hover, setHover] = useState(false)
    const { width } = useWindowDimensions();

    const onHover = () => {
        setHover(!hover);
    }

    const postUrl = `https://buddygames.us13.list-manage.com/subscribe/post?u=1f59819ce547771375b087b24&id=328c2420e4`

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={Image} alt="Board Games" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Que jeu soit loué !</HeroH1>
                <HeroP>
                    Hello Buddy, notre projet est encore en cours de développement.
                </HeroP>
                <HeroP>
                    Si tu veux être au courant des derniers avancements, inscris toi à notre <strong>newsletter</strong> !
                </HeroP>
                <HeroP style={{fontSize:'0.9rem', marginTop:'0.5rem'}}>(promis, on ne spammera pas)</HeroP>

                <MailchimpSubscribe 
                    url={postUrl} 
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />

                <HeroBtnWrapper>
                    <Button to="presentation" onMouseEnter={onHover} onMouseLeave={onHover} style={{marginTop:'1rem'}}
                    primary='true' 
                    dark='true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>
                        <span style={{fontWeight:'700'}}>Qui sommes-nous ?</span> {hover ? <ArrowDownward /> : <ArrowDown />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default FirstSection
