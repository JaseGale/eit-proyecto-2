import { NavLink } from "react-router"
import Box from "../components/Box"
import Container from "../components/Container"
import Text from "../components/Text"
import Cart from "../components/Cart"

import brandImage from "../imgs/jugueterialogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import DrawerMenu from "../components/DrawerMenu"

function Header() {

    const [openMenuDrawer, setOpenMenuDrawer] = useState(false)

    return (
        <header className="navbar__container">
            <Container className="d-flex space-between">
                <NavLink to="/" className="d-flex align-center">
                        <img src={brandImage} alt="Logo de la Juguetería" className="logo mr-4"/>
                    <Text as="h1">Juguetería <Text as="span">Cósmica</Text></Text>                    
                </NavLink>
                <Box as="nav" className="navbar__navigation">
                    <ul>
                        <li><NavLink to="/about-us">Sobre Nosotros</NavLink></li>
                        <li><NavLink to="/upload">Alta</NavLink></li>
                        <li><NavLink to="/contact-us">Contáctanos</NavLink></li>
                        <li><Cart/></li>
                    </ul>
                </Box>
                <Box className="navbar__menu-mobile">
                    <Cart />                    
                    <button className="navbar__menu-button" onClick={() => setOpenMenuDrawer(true)}>
                        <FontAwesomeIcon icon={faBars} size="xl"/>
                    </button>
                </Box>    
            </Container>
            <DrawerMenu show={openMenuDrawer} closeMenu={() => setOpenMenuDrawer(false)}>
                <Box as="nav" className="navbar__drawer-menu">
                    <ul>
                        <li><NavLink to="/about-us" onClick={() => setOpenMenuDrawer(false)}>Sobre Nosotros</NavLink></li>
                        <li><NavLink to="/upload" onClick={() => setOpenMenuDrawer(false)}>Alta</NavLink></li>
                        <li><NavLink to="/contact-us" onClick={() => setOpenMenuDrawer(false)}>Contáctanos</NavLink></li>
                    </ul>
                </Box>                
            </DrawerMenu>
        </header>
    )
}

export default Header