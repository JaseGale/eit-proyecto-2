
import CartProvider from "./context/CartProvider"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <div>
      <CartProvider>
        <AppRoutes/>
      </CartProvider>
    </div>
  )
}

export default App