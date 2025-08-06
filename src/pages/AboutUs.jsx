
import Box from '../components/Box'
import Container from '../components/Container'
import Text from '../components/Text'

function AboutUs() {
  return (
    <Container as='main'>
      <Text as='h2'>Sobre Nosotros</Text>
      <Box className="d-flex d-flex-direction-column align-center text-align-center">
        <img src="./src/imgs/Local/f7874884d163ce5aead2e7a3dafdbe5d.jpg" alt="Fotografía del Local" className='store-image'/>
        <Text className="history">
          Juguetería Cósmica es una empresa familiar fundada en 1975. Hace más de cuarenta años que nos dedicamos a cumplir la ilusión de los niñ@s.
          <br />
          La empresa comenzó con la ilusión de nuestros padres en transmitir a todos los niños Argentinos las ganas de disfrutar jugando. Y año tras año ir mejorando en nuestros servicios y calidad hacia todos nuestros clientes.
          <br />
          Actualmente somos la segunda generación de esta familia la que nos dedicamos a seguir la estela de nuestros padres manteniendo nuestras jugueterías con el mayor cariño y cercanía a todos nuestros clientes y a todos los niños del mundo que quieran ser felices jugando.
          <br />
          Comenzamos con la primera tienda en la localidad de Avellaneda en Buenos Aires y actualmente contamos con 9 establecimientos repartidos por la provincia.
          <br />
          Ahora, nos adentramos en este apasionante mundo de la venta online con muchísimas ganas e ilusión para poder llegar a todos los niños y no tan niños de cualquier parte de Argentina.
        </Text>
      </Box>
    </Container>
  )
}

export default AboutUs