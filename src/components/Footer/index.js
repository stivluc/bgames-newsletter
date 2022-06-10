import React from 'react'
import {FooterContainer, FooterH1, FooterH2, FooterCredits} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
                <FooterH1>
                    Suivez-nous sur instagram !
                </FooterH1>
                <FooterH2>
                    <a style={{color: 'white'}} href='https://www.instagram.com/buddygames.fr/'>@buddygames.fr</a>
                </FooterH2>
                    <FooterCredits>
                    BuddyGames © {new Date().getFullYear()} | Tous droits réservés
                    </FooterCredits>
                    <FooterCredits>
                    Design & Développement par Steven Lucas
                    </FooterCredits>

        </FooterContainer>
    )
}

export default Footer
