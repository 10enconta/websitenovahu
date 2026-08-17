'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faPlus,
  faMinus,
  faTrashCan,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons'
import { useCart } from './cart-context'

const fmt = (n) =>
  new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(n)

export default function CartDrawer() {
  const { items, totalItems, totalPrecio, isOpen, setIsOpen, updateQty, removeItem, clear } =
    useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-base-100 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Carrito de compras"
      >
        <div className="flex items-center justify-between border-b border-base-300 p-4">
          <h2 className="flex items-center gap-2 text-lg font-extrabold">
            <FontAwesomeIcon icon={faCartShopping} className="text-primary" />
            Tu carrito
            <span className="badge badge-neutral badge-sm">{totalItems}</span>
          </h2>
          <button
            type="button"
            className="btn btn-circle btn-ghost btn-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar carrito"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-base-content/60">
              <FontAwesomeIcon icon={faCartShopping} className="text-4xl" />
              <p className="font-semibold">Tu carrito está vacío</p>
              <button className="btn btn-ghost btn-sm" onClick={() => setIsOpen(false)}>
                Seguir comprando
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-box border border-base-200 bg-base-100 p-2"
                >
                  <img
                    src={item.imagen || '/placeholder.svg'}
                    alt={item.nombre}
                    className="size-16 rounded-field bg-base-200 object-contain"
                  />
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-bold leading-tight text-pretty">{item.nombre}</p>
                    <p className="text-xs text-base-content/60">{item.presentacion}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="join border border-base-300">
                        <button
                          className="btn btn-ghost btn-xs join-item"
                          onClick={() => updateQty(item.id, -1)}
                          aria-label="Quitar uno"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="join-item grid w-8 place-items-center text-sm font-bold">
                          {item.cantidad}
                        </span>
                        <button
                          className="btn btn-ghost btn-xs join-item"
                          onClick={() => updateQty(item.id, 1)}
                          aria-label="Agregar uno"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <span className="text-sm font-extrabold text-primary">
                        {fmt(item.precio * item.cantidad)}
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn btn-circle btn-ghost btn-xs self-start text-error"
                    onClick={() => removeItem(item.id)}
                    aria-label="Eliminar producto"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-base-300 p-4">
            <div className="mb-3 flex items-center justify-between text-lg">
              <span className="font-semibold">Total</span>
              <span className="font-extrabold text-primary">{fmt(totalPrecio)}</span>
            </div>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary btn-block"
            >
              <FontAwesomeIcon icon={faWhatsappBrand} />
              Solicitar cotización
            </a>
            <button className="btn btn-ghost btn-block btn-sm mt-2" onClick={clear}>
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

