import React from 'react'
import {ContactContainer, ContactInfoItem, Location, Mail, Phone, Clock, ContactHeading, ContactIframe, ContactColumn1, ContactColumn2, ContactWrapper} from './ContactElements'



const Contact = () => {
    return (
        <ContactContainer id='contact'>
            <ContactHeading>Informations de contact</ContactHeading>
            <ContactWrapper>
                    <ContactColumn1>
                                <ContactInfoItem href='https://www.google.com/maps/dir//Icam,+Rue+Auber,+Lille/@50.6303171,3.006437,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47c2d570608a7be1:0x8e8949535899880b!2m2!1d3.0414563!2d50.6302679'>
                                    <Location />6 Rue Auber, <br/>59800 LILLE
                                </ContactInfoItem>
                                <ContactInfoItem href='tel:+33651132003'>
                                    <Phone/>06 51 13 20 03
                                </ContactInfoItem>
                                <ContactInfoItem  href='mailto:contact@buddygames.fr'>
                                    <Mail />contact@buddygames.fr
                                </ContactInfoItem>
                                <ContactInfoItem href='https://www.google.com/maps/dir//Icam,+Rue+Auber,+Lille/@50.6303171,3.006437,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47c2d570608a7be1:0x8e8949535899880b!2m2!1d3.0414563!2d50.6302679'>
                                    <Clock />Lun-Ven : 9-18h
                                </ContactInfoItem>
                    </ContactColumn1>
                    <ContactColumn2>
                    <ContactIframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10123.321485081462!2d3.0414563!3d50.6302679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8e8949535899880b!2sInstitut%20Catholique%20d&#39;Arts%20et%20M%C3%A9tiers!5e0!3m2!1sfr!2sfr!4v1654038316396!5m2!1sfr!2sfr' width="500" height="600" allowfullscreen></ContactIframe>
                    </ContactColumn2>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
