import { createPortal } from "react-dom"
import Box from "./Box"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

function Modal({
    show,
    closeModal,
    children
}) {
  return (
    show ? 
        createPortal(
            <Box className="modal__overlay" role="button" onClick={closeModal}>
                <Box className="modal__content" onClick={e => e.stopPropagation()}>
                    <Box className="d-flex justify-end">
                        <button onClick={closeModal} className="modal__close">
                            <FontAwesomeIcon icon={faClose} size="xl"/>
                        </button>
                    </Box>
                    {children}
                </Box>
            </Box>,
            document.body
        )
    : null  
  )
}

export default Modal