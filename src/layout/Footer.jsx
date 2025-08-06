import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Box from "../components/Box"
import Container from "../components/Container"
import Text from '../components/Text'
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <Box as="footer" className = "footer__container">
        <Container className="footer__wrapp">
            <Text as="h4">Juguetería <br/><Text as="span">Cósmica</Text></Text>
            <Text as="span" className="rights">Copyright 2025</Text>
            <Box className="footer__socialmedia-links ">
                <FontAwesomeIcon className="footer__socialmedia-links" icon= {faFacebook} size="xl"/>
                <FontAwesomeIcon className="footer__socialmedia-links" icon= {faInstagram} size="xl"/>
                <FontAwesomeIcon className="footer__socialmedia-links" icon= {faYoutube} size="xl"/>                                
            </Box>
        </Container>
    </Box>
  )
}

export default Footer