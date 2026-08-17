import { CartProvider } from '@/components/cart-context'
import Navbar from '@/components/navbar'
import CartDrawer from '@/components/cart-drawer'
import Hero from '@/components/hero'
import Ventas from '@/components/ventas'
import Catalogo from '@/components/catalogo'
import Contacto from '@/components/contacto'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <Ventas />
        <Catalogo />
        <Contacto />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}

