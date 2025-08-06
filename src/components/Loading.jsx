import Box from "./Box"
import loading from '../imgs/LoadingGif/Loading.svg'


function Loading() {
  return (
    <Box className="loading d-flex justify-center align-center"> 
      <img src={loading} alt="Gif de carga" />
    </Box>
  )
}

export default Loading