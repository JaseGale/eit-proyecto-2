import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import Box from "./Box"
import Text from "./Text"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import Modal from "./Modal"
import Counter from "./Counter"

function Cart() {

    const {cart, totalQuantity} = useContext(CartContext)

    const [showModal, setShowModal] = useState(false)

    const totalAmount = cart.reduce((acc, item) => acc + item.prod.amount * item.quantity, 0)
  return (
    <>
        <Box className ="cart__container" role="button" onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faShoppingCart} size="xl"/>
            <Box className="cart__badge">
            <Text as="span">{totalQuantity}</Text>
            </Box>
        </Box>
    
        <Modal show={showModal} closeModal={() => setShowModal(false)}>
            <Text as="h3">Productos seleccionados</Text>
            <Box className="cart__list">
            {
                cart.map(
                    ({prod, quantity}) =>
                        <Box key= {prod.id} className="d-flex align-center space-between">
                            <Text as="h5">{prod.name}</Text>
                            <Counter product={prod}/>
                            <Text as="b">{`$ ${prod.amount * quantity}`}</Text>
                        </Box>     
                )
            }
            </Box>
            <hr/>
            <Box className="d-flex align-center space-between">
                <Text as="h5">Total:</Text>
                <Text as="b">{`$ ${totalAmount}`}</Text>
            </Box>
        </Modal>
    </>
  )
}

export default Cart