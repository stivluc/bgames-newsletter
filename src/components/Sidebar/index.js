import React, {useEffect, useState} from 'react'
import { SidebarContainer, SidebarMenu, Icon, CloseIcon, SidebarLink} from './SidebarElements'
import {ReactComponent as LogoIcon} from '../../images/LogoIcon.svg'
import {animateScroll as scroll} from 'react-scroll';
import { NavLogo } from '../Navbar/NavbarElements';

const Sidebar = ({isOpen, toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <div>
                <SidebarMenu>
                    <NavLogo to='/' onClick={toggleHome} style={{justifySelf:'center'}}>
                        <LogoIcon style={{objectFit: 'contain', height:'70px', marginBottom:'1rem'}}/>
                    </NavLogo>
                    <SidebarLink to="presentation" onClick={toggle}>
                        Présentation
                    </SidebarLink>
                    <SidebarLink to="pres2" onClick={toggle}>
                        Expérience
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar
